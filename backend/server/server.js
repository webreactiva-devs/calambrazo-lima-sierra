require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Webhook
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log(`Checkout Session Completed: ${session.id}`);
    const buyerEmail = session.customer_email || (session.customer_details && session.customer_details.email);
    if (buyerEmail) {
      let paymentIntent;
      if (typeof session.payment_intent === 'string') {
        paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);
      } else {
        paymentIntent = session.payment_intent;
      }
      console.log("Metadata del PaymentIntent:", paymentIntent.metadata);
      await sendPurchaseEmail(paymentIntent, buyerEmail);
    } else {
      console.log("No se encontró email del comprador en la sesión.");
    }
  } else {
    console.log(`Unhandled event type ${event.type}`);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ received: true }));
});


// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const YOUR_FRONTEND_DOMAIN = process.env.YOUR_FRONTEND_DOMAIN || 'http://localhost:4200';

// Checkout
app.post('/checkout', async (req, res) => {
  const items = req.body.items.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.title,
        images: [item.image]
      },
      unit_amount: Math.round(item.price * 100)
    },
    quantity: item.quantity ? item.quantity : 1
  }));

  const total = items.reduce((acc, item) => {
    return acc + ((item.price_data.unit_amount / 100) * item.quantity);
  }, 0);

  const purchaseDatetime = new Date().toISOString();

  const itemsSummary = items
    .map(item => `${item.price_data.product_data.name} x${item.quantity}`)
    .join(', ');

  let orderSummary = `Items: ${itemsSummary} | Total: ${total}€ | Fecha: ${purchaseDatetime}`;
  if (orderSummary.length > 500) {
    orderSummary = orderSummary.slice(0, 500);
  }

  const customerEmail = req.body.customer_email;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: items,
      mode: 'payment',
      success_url: `${YOUR_FRONTEND_DOMAIN}/success`,
      cancel_url: `${YOUR_FRONTEND_DOMAIN}/cancel`,
      ...(customerEmail && { customer_email: customerEmail }),
      payment_intent_data: {
        metadata: {
          order_details: orderSummary
        }
      }
    });
    res.status(200).json(session);
  } catch (error) {
    console.error("Error creando la sesión de Stripe:", error);
    res.status(500).json({ error: error.message });
  }
});

// Google
// async function sendPurchaseEmail(paymentIntent) {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS
//     }
//   });

//   let mailOptions = {
//     from: 'fayenzalalala@gmail.com',
//     to: 'alberwave@gmail.com',
//     subject: 'Compra realizada con éxito',
//     text: `El pago con ID ${paymentIntent.id} se ha realizado con éxito.`,
//     html: `<p>El pago con ID <strong>${paymentIntent.id}</strong> se ha realizado con éxito.</p>`
//   };

//   try {
//     let info = await transporter.sendMail(mailOptions);
//     console.log('Correo enviado: ' + info.response);
//   } catch (error) {
//     console.error('Error enviando el correo:', error);
//   }
// }

// Ethereal
async function sendPurchaseEmail(paymentIntent, buyerEmail) {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error('Error al crear la cuenta en Ethereal:', err);
      return;
    }

    console.log('Cuenta Ethereal creada, enviando mensaje...');

    let transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass
      }
    });

    let orderDetailsText = paymentIntent.metadata && paymentIntent.metadata.order_details
      ? paymentIntent.metadata.order_details
      : '';

    let parts = orderDetailsText.split('|');

    let itemsHTML = '';
    let totalHTML = '';
    let dateHTML = '';

    if (parts[0]) {
      let itemsRaw = parts[0].replace('Items:', '').trim();
      let itemsArray = itemsRaw.split(',');
      itemsHTML = itemsArray.map(item => {
        let cleanItem = item.trim();
        return `<li style="margin-bottom: 4px;">${cleanItem}</li>`;
      }).join('');
    }

    if (parts[1]) {
      totalHTML = `<p style="font-size: 18px; font-weight: bold; margin-top: 10px;">${parts[1].trim()}</p>`;
    }

    if (parts[2]) {
      dateHTML = `<p style="margin-top: 5px; font-size: 14px; color: #777;">${parts[2].trim()}</p>`;
    }

    let mailOptions = {
      from: '"Test Store" <no-reply@example.com>',
      to: buyerEmail,
      subject: 'Compra realizada con éxito',
      text: `El pago con ID ${paymentIntent.id} se ha realizado con éxito.\n\n${orderDetailsText}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h1 style="color: #c1a178; text-align: center;">¡Pago realizado con éxito!</h1>
          <p style="font-size: 16px; color: #333;">
            El pago con ID <strong>${paymentIntent.id}</strong> se ha realizado con éxito.
          </p>
          <h2 style="font-size: 18px; color: #555; border-bottom: 1px solid #c1a178; padding-bottom: 5px;">Detalles del pedido</h2>
          <!-- Lista de ítems -->
          <ul style="font-size: 14px; color: #333; margin-top: 10px; list-style-type: disc; padding-left: 20px;">
            ${itemsHTML}
          </ul>
          <!-- Total en grande -->
          ${totalHTML}
          <!-- Fecha en una línea aparte -->
          ${dateHTML}
          <p style="font-size: 14px; color: #777; margin-top: 20px; text-align: center;">
            ¡Gracias por tu compra!
          </p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error enviando el correo:', err);
      } else {
        console.log('Correo enviado: ' + info.response);
        console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
      }
    });
  });
}

app.listen(4242, () => console.log('Running on port 4242'));
