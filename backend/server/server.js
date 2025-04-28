if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
// Servidor completo con cors, Stripe, checkout y webhook
const express = require('express');
const cors = require('cors');

const app = express();

let stripeInitialized = false;
let stripeError = null;
let stripe = null;

// Función para asegurar que una URL tenga el protocolo correcto
function ensureHttps(url) {
  if (!url) return 'https://fayenza-store.vercel.app/';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
}

// Intentar inicializar Stripe de forma segura
if (process.env.STRIPE_SECRET_KEY) {
  try {
    // Importar Stripe de forma dinámica para evitar errores de inicialización
    const stripeModule = require('stripe');
    stripe = stripeModule(process.env.STRIPE_SECRET_KEY);
    stripeInitialized = true;
    console.log('Stripe inicializado correctamente');
  } catch (error) {
    stripeError = `Error al inicializar Stripe: ${error.message}`;
    console.error(stripeError);
    // No hacer fallar el servidor si Stripe falla
    stripe = null;
  }
} else {
  stripeError = 'STRIPE_SECRET_KEY no está definido';
  console.warn(stripeError);
}

// Webhook
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    if (!stripe) {
      console.log('Stripe no está inicializado, usando mock para webhook');
      return res.status(200).json({ received: true, mock: true });
    }

    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!endpointSecret) {
      console.warn('STRIPE_WEBHOOK_SECRET no está definido, usando mock para webhook');
      return res.status(200).json({ received: true, mock: true });
    }

    const sig = req.headers['stripe-signature'];
    if (!sig) {
      console.warn('No se encontró stripe-signature en los headers');
      return res.status(400).json({ error: 'No stripe-signature found in headers' });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return res.status(400).json({ error: `Webhook Error: ${err.message}` });
    }

    // Procesar evento
    console.log(`Evento recibido: ${event.type}`);

    // Responder siempre con éxito, incluso si hay errores en el procesamiento
    res.status(200).json({ received: true });

    // Procesar el evento de forma asíncrona después de responder
    if (event.type === 'checkout.session.completed') {
      processCheckoutSession(event.data.object).catch(err => {
        console.error('Error procesando checkout.session.completed:', err);
      });
    }
  } catch (error) {
    console.error('Error general en webhook:', error);
    // Siempre responder con éxito para evitar reintentos
    res.status(200).json({ received: true, error: error.message });
  }
});

// Función para procesar checkout.session.completed
async function processCheckoutSession(session) {
  try {
    console.log(`Procesando Checkout Session: ${session.id}`);
    // Aquí iría el código para procesar la sesión
    // Por ahora, solo lo simulamos
    console.log('Sesión procesada correctamente');
  } catch (error) {
    console.error('Error procesando la sesión:', error);
  }
}

// Middleware CORS - Después de la ruta webhook
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Middleware para parsear JSON - Después de la ruta webhook
app.use(express.json());

// Ruta para la raíz con diagnóstico detallado
app.get('/', (req, res) => {
  const frontendDomain = process.env.YOUR_FRONTEND_DOMAIN || 'No configurado';
  const frontendDomainWithProtocol = ensureHttps(frontendDomain);

  res.status(200).json({
    status: 'ok',
    message: 'Backend server is running (complete version without dotenv)',
    stripe: {
      initialized: stripeInitialized,
      error: stripeError
    },
    env: {
      nodeEnv: process.env.NODE_ENV || 'No configurado',
      frontendDomain: frontendDomain,
      frontendDomainWithProtocol: frontendDomainWithProtocol,
      hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
      hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET
    }
  });
});

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running (complete version without dotenv)',
    stripeInitialized: stripeInitialized
  });
});

// Checkout
app.post('/api/checkout', async (req, res) => {
  // Si Stripe no está inicializado, usar mock
  if (!stripe) {
    console.log('Usando mock de Stripe para checkout');
    return res.status(200).json({
      id: 'mock_session_' + Date.now(),
      url: `${ensureHttps(process.env.YOUR_FRONTEND_DOMAIN)}/success?mock=true`,
      object: 'checkout.session',
      mock: true
    });
  }

  try {
    console.log('Procesando checkout con Stripe real');

    // Validar que req.body.items existe y es un array
    if (!req.body.items || !Array.isArray(req.body.items) || req.body.items.length === 0) {
      return res.status(400).json({
        error: 'Invalid request: items must be a non-empty array'
      });
    }

    // Mapear items
    const items = req.body.items.map(item => {
      // Validar que item tiene las propiedades necesarias
      if (!item.title || !item.price) {
        throw new Error('Invalid item: missing title or price');
      }

      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.title,
            images: item.image ? [item.image] : []
          },
          unit_amount: Math.round(item.price * 100)
        },
        quantity: item.quantity ? item.quantity : 1
      };
    });

    // Calcular total
    let total = 0;
    try {
      total = items.reduce((acc, item) => {
        return acc + ((item.price_data.unit_amount / 100) * item.quantity);
      }, 0);
    } catch (error) {
      console.error('Error calculando el total:', error);
      total = 0;
    }

    const purchaseDatetime = new Date().toISOString();

    // Crear resumen de items
    let itemsSummary = '';
    try {
      itemsSummary = items
        .map(item => `${item.price_data.product_data.name} x${item.quantity}`)
        .join(', ');
    } catch (error) {
      console.error('Error creando el resumen de items:', error);
      itemsSummary = 'Error en resumen de items';
    }

    let orderSummary = `Items: ${itemsSummary} | Total: ${total}€ | Fecha: ${purchaseDatetime}`;
    if (orderSummary.length > 500) {
      orderSummary = orderSummary.slice(0, 500);
    }

    const customerEmail = req.body.customer_email;

    // Asegurar que las URLs de redirección tengan el protocolo correcto
    const frontendDomain = ensureHttps(process.env.YOUR_FRONTEND_DOMAIN);

    // Crear sesión de Stripe
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        success_url: `${frontendDomain}/success`,
        cancel_url: `${frontendDomain}/cancel`,
        ...(customerEmail && { customer_email: customerEmail }),
        payment_intent_data: {
          metadata: {
            order_details: orderSummary
          }
        }
      });

      console.log('Sesión de Stripe creada correctamente:', session.id);
      res.status(200).json(session);
    } catch (stripeError) {
      console.error("Error creando la sesión de Stripe:", stripeError);

      res.status(500).json({
        error: stripeError.message,
        type: stripeError.type,
        code: stripeError.code,
        mock: false,
        frontendDomain: process.env.YOUR_FRONTEND_DOMAIN,
        frontendDomainWithProtocol: frontendDomain
      });
    }
  } catch (error) {
    console.error("Error general en checkout:", error);

    res.status(500).json({
      error: error.message,
      location: 'checkout general',
      mock: false
    });
  }
});

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4242;
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

// Exportar para Vercel
module.exports = app;
