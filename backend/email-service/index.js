require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*', methods: ['POST'], credentials: true }));
app.use(express.json());

// Construcción del mailOptions extraída a función aparte
function buildPurchaseMailOptions({ email, orderDetailsText, paymentIntentId }) {
  const parts = orderDetailsText.split('|');
  const itemsHTML = (parts[0] || '').replace('Items:', '').split(',').map(item => `<li>${item.trim()}</li>`).join('');
  const totalHTML = parts[1] ? `<p style="font-weight:bold;">${parts[1].trim()}</p>` : '';
  const dateHTML = parts[2] ? `<p style="color:gray;">${parts[2].trim()}</p>` : '';

  return {
    from: '"Fayenza Store" <no-reply@fayenza.com>',
    to: email,
    subject: 'Compra realizada con éxito',
    text: `Pago ID ${paymentIntentId}\n\n${orderDetailsText}`,
    html: `
      <div style="font-family:sans-serif;padding:20px;">
        <h1 style="color:#c1a178;">¡Pago realizado con éxito!</h1>
        <p>Pago ID: <strong>${paymentIntentId}</strong></p>
        <h2>Detalles del pedido:</h2>
        <ul>${itemsHTML}</ul>
        ${totalHTML}
        ${dateHTML}
        <p style="margin-top:20px;">¡Gracias por confiar en Fayenza Store!</p>
      </div>
    `
  };
}

// Nueva función para enviar el email
function sendPurchaseEmail(mailOptions, callback) {
  if (process.env.EMAIL_ENV === 'production') {
    console.log('Enviando email en producción...');
    // Envío real usando SMTP y variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    transporter.sendMail(mailOptions, (err, info) => {
      callback(err, info);
    });
  } else {
    // Envío de prueba con Ethereal
    console.log('Enviando email en modo de prueba...');
    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.error('Error al crear cuenta Ethereal:', err);
        return callback(err);
      }

      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });

      transporter.sendMail(mailOptions, (err, info) => {
        callback(err, info);
      });
    });
  }
}

app.all('/api/send-email', async (req, res) => {
  let email, orderDetailsText, paymentIntentId;

  if (req.method === 'GET') {
    email = req.query.email;
    orderDetailsText = req.query.orderDetailsText;
    paymentIntentId = req.query.paymentIntentId;
  } else {
    // POST, PUT, etc.
    email = req.body.email;
    orderDetailsText = req.body.orderDetailsText;
    paymentIntentId = req.body.paymentIntentId;
  }

  // Valores por defecto para pruebas
  email = email || 'test@example.com';
  orderDetailsText = orderDetailsText || 'Items: Producto Demo x1 | Total: 10€ | Fecha: 2024-01-01T12:00:00Z';
  paymentIntentId = paymentIntentId || 'demo_payment_id';

  if (!email) {
    return res.status(400).json({ error: 'Email es requerido' });
  }

  // Construir mailOptions antes de enviar el email
  const mailOptions = buildPurchaseMailOptions({ email, orderDetailsText, paymentIntentId });

  try {
    sendPurchaseEmail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error enviando email:', err);
        return res.status(500).json({ error: 'Error enviando email' });
      } else {
        const previewUrl = nodemailer.getTestMessageUrl(info);
        console.log('Correo enviado: ' + info.response);
        console.log('Preview URL: ' + previewUrl);
        return res.status(200).json({ sent: true, previewUrl });
      }
    });
  } catch (error) {
    console.error('Error general en envío de email:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Email service running on port ${PORT}`));
