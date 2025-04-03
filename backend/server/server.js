require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

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
   if (event.type === 'charge.succeeded') {

    let charge = event.data.object;

    let paymentIntent;
    if (typeof charge.payment_intent === 'string') {
      paymentIntent = await stripe.paymentIntents.retrieve(charge.payment_intent);
    } else {
      paymentIntent = charge.payment_intent;
    }
    console.log(`Pago exitoso (Charge): ${paymentIntent.id}`);
    await sendPurchaseEmail(paymentIntent);
  } else {
    console.log(`Unhandled event type ${event.type}`);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ received: true }));
});


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const YOUR_FRONTEND_DOMAIN = 'http://localhost:4200';

app.post('/checkout', async (req, res) => {
  const items = req.body.items.map(item => {
    return {
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: item.price * 100,
        },
        quantity: item.quantity ? item.quantity : 1
    }
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [...items],
    mode: 'payment',
    success_url: `${YOUR_FRONTEND_DOMAIN}/success`,
    cancel_url: `${YOUR_FRONTEND_DOMAIN}/cancel`,
  });

  res.status(200).json(session);
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

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

async function sendPurchaseEmail(paymentIntent) {
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

    let mailOptions = {
      from: '"Test Store" <no-reply@example.com>',
      to: 'alberwave@gmail.com',
      subject: 'Compra realizada con éxito',
      text: `El pago con ID ${paymentIntent.id} se ha realizado con éxito.`,
      html: `<p>El pago con ID <strong>${paymentIntent.id}</strong> se ha realizado con éxito.</p>`
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
