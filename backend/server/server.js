if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
// Servidor completo con cors, Stripe, checkout y webhook
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

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

    const paymentIntentId = session.payment_intent;
    if (!paymentIntentId) {
      console.error('No se encontró payment_intent en la sesión.');
      return;
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ['charges.data.billing_details']
    });

    const orderDetailsText = paymentIntent.metadata?.order_details || '';

    const buyerEmail =
      paymentIntent.charges?.data?.[0]?.billing_details?.email ||
      paymentIntent.receipt_email ||
      session.customer_details?.email;

    if (!buyerEmail) {
      console.warn('No se encontró un email válido en paymentIntent o session.');
      console.log('paymentIntent:', JSON.stringify(paymentIntent, null, 2));
      console.log('session:', JSON.stringify(session, null, 2));
      return;
    }

    console.log('Llamando a sendPurchaseEmail...');
    await sendPurchaseEmail(paymentIntent, buyerEmail, orderDetailsText);

    console.log('Sesión procesada correctamente');
  } catch (error) {
    console.error('Error procesando la sesión:', error);
  }
}

async function sendPurchaseEmail(paymentIntent, buyerEmail, orderDetailsText) {
  try {
    console.log('Iniciando envío de email...');
    console.log('EMAIL_ENV:', process.env.EMAIL_ENV);
    console.log('Datos del email:', { paymentIntent, buyerEmail, orderDetailsText });

    let transporter;

    if (process.env.EMAIL_ENV === 'production') {
      console.log('Configurando transporte para Mailtrap...');
      // Configuración del transporte SMTP para Mailtrap
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    } else {
      console.log('Configurando transporte para Ethereal...');
      // Configuración del transporte SMTP para Ethereal
      const testAccount = await nodemailer.createTestAccount();
      console.log('Cuenta de prueba Ethereal creada:', testAccount);

      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
    }

    console.log('Construyendo contenido del email...');
    const parts = orderDetailsText.split('|');
    const itemsHTML = (parts[0] || '').replace('Items:', '').split(',').map(item => `<li>${item.trim()}</li>`).join('');
    const totalHTML = parts[1] ? `<p style="font-weight:bold;">${parts[1].trim()}</p>` : '';
    const dateHTML = parts[2] ? `<p style="color:gray;">${parts[2].trim()}</p>` : '';

    const mailOptions = {
      from: '"Fayenza Store" <no-reply@fayenza.com>',
      to: buyerEmail,
      subject: 'Compra realizada con éxito',
      text: `Pago ID ${paymentIntent.id}\n\n${orderDetailsText}`,
      html: `
        <div style="font-family:sans-serif;padding:20px;">
          <h1 style="color:#c1a178;">¡Pago realizado con éxito!</h1>
          <p>Pago ID: <strong>${paymentIntent.id}</strong></p>
          <h2>Detalles del pedido:</h2>
          <ul>${itemsHTML}</ul>
          ${totalHTML}
          ${dateHTML}
          <p style="margin-top:20px;">¡Gracias por confiar en Fayenza Store!</p>
        </div>
      `
    };

    console.log('Enviando email con las siguientes opciones:', mailOptions);

    // Enviar el email
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);

    // Mostrar URL de previsualización en modo de prueba
    if (process.env.EMAIL_ENV !== 'production') {
      console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
    }
  } catch (error) {
    console.error('Error enviando email:', error);
  }
}

// Ruta para enviar un correo de prueba
app.post('/api/test-email', async (req, res) => {
  try {
    const mailOptions = {
      from: '"Fayenza Store" <no-reply@fayenza.com>',
      to: 'alberwave@gmail.com',
      subject: 'Prueba de correo',
      text: 'Este es un correo de prueba.',
      html: '<p>Este es un correo de prueba.</p>'
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);

    res.status(200).json({ message: 'Correo enviado', info });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: error.message });
  }
});

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
// app.get('/api/health', (req, res) => {
//   res.status(200).json({
//     status: 'ok',
//     message: 'Server is running (complete version without dotenv)',
//     stripeInitialized: stripeInitialized
//   });
// });

// Checkout
app.post('/api/checkout', async (req, res) => {
  if (!stripe) {
    return res.status(200).json({
      id: 'mock_session_' + Date.now(),
      url: `${ensureHttps(process.env.YOUR_FRONTEND_DOMAIN)}/success?mock=true`,
      object: 'checkout.session',
      mock: true
    });
  }

  try {
    console.log('Procesando checkout');

    if (!req.body.items || !Array.isArray(req.body.items)) {
      return res.status(400).json({ error: 'Items inválidos' });
    }

    const items = req.body.items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.title,
          images: item.image ? [item.image] : []
        },
        unit_amount: Math.round(item.price * 100)
      },
      quantity: item.quantity || 1
    }));

    const purchaseDatetime = new Date().toISOString();

    const itemsSummary = items.map(item => `${item.price_data.product_data.name} x${item.quantity}`).join(', ');
    const total = items.reduce((acc, item) => acc + ((item.price_data.unit_amount / 100) * item.quantity), 0);
    const orderSummary = `Items: ${itemsSummary} | Total: ${total}€ | Fecha: ${purchaseDatetime}`;

    const frontendDomain = ensureHttps(process.env.YOUR_FRONTEND_DOMAIN);

    const session = await stripe.checkout.sessions.create({
      line_items: items,
      mode: 'payment',
      success_url: `${frontendDomain}/success`,
      cancel_url: `${frontendDomain}/cancel`,
      ...(req.body.customer_email && { customer_email: req.body.customer_email }),
      payment_intent_data: {
        metadata: {
          order_details: orderSummary
        }
      }
    });

    console.log('Sesión de Stripe creada: ' + session.id);
    res.status(200).json(session);
  } catch (error) {
    console.error('Error general en checkout:', error);
    res.status(500).json({ error: error.message, location: 'checkout general', mock: false });
  }
});

// Enviar email con Ethereal
// async function sendPurchaseEmail(paymentIntent, buyerEmail, orderDetailsText) {
//   nodemailer.createTestAccount((err, account) => {
//     if (err) {
//       console.error('Error al crear cuenta Ethereal:', err);
//       return;
//     }

//     const transporter = nodemailer.createTransport({
//       host: account.smtp.host,
//       port: account.smtp.port,
//       secure: account.smtp.secure,
//       auth: {
//         user: account.user,
//         pass: account.pass
//       }
//     });

//     const parts = orderDetailsText.split('|');
//     const itemsHTML = (parts[0] || '').replace('Items:', '').split(',').map(item => `<li>${item.trim()}</li>`).join('');
//     const totalHTML = parts[1] ? `<p style="font-weight:bold;">${parts[1].trim()}</p>` : '';
//     const dateHTML = parts[2] ? `<p style="color:gray;">${parts[2].trim()}</p>` : '';

//     const mailOptions = {
//       from: '"Fayenza Store" <no-reply@fayenza.com>',
//       to: buyerEmail,
//       subject: 'Compra realizada con éxito',
//       text: `Pago ID ${paymentIntent.id}\n\n${orderDetailsText}`,
//       html: `
//         <div style="font-family:sans-serif;padding:20px;">
//           <h1 style="color:#c1a178;">¡Pago realizado con éxito!</h1>
//           <p>Pago ID: <strong>${paymentIntent.id}</strong></p>
//           <h2>Detalles del pedido:</h2>
//           <ul>${itemsHTML}</ul>
//           ${totalHTML}
//           ${dateHTML}
//           <p style="margin-top:20px;">¡Gracias por confiar en Fayenza Store!</p>
//         </div>
//       `
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.error('Error enviando email:', err);
//       } else {
//         console.log('Correo enviado: ' + info.response);
//         console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info)); // Aquí se muestra la URL
//       }
//     });
//   });
// }

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4242;
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

// Exportar para Vercel
module.exports = app;
