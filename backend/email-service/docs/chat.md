---

## Item

delineas: quiero que construyas en backend/email-service un servicio que envíe emails

lo que quiero es enviar en un post a una ruta generada con express un json (los datos de compra, de momento solo el email) y que tomes lo que aparece en el server.js de server para enviar el email cuando se recibe el post en esa url del emai-service

GitHub Copilot: Para cumplir tu requerimiento, estos son los pasos:

1. Crear un nuevo archivo en `backend/email-service` que exponga una ruta POST `/api/send-email`.
2. Usar Express y Nodemailer en ese archivo.
3. Recibir un JSON con al menos el campo `email` y enviar un email usando la lógica de `sendPurchaseEmail` de `server.js`.
4. Devolver una respuesta con el resultado del envío.

### [index.js](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/index.js)

Crear el servicio de email con una ruta POST que recibe el email y envía el correo usando Nodemailer (lógica adaptada de `sendPurchaseEmail`).

````javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*', methods: ['POST'], credentials: true }));
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { email, orderDetailsText = '', paymentIntentId = 'demo_payment_id' } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email es requerido' });
  }

  try {
    nodemailer.createTestAccount(async (err, account) => {
      if (err) {
        console.error('Error al crear cuenta Ethereal:', err);
        return res.status(500).json({ error: 'Error creando cuenta de email' });
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

      const parts = orderDetailsText.split('|');
      const itemsHTML = (parts[0] || '').replace('Items:', '').split(',').map(item => `<li>${item.trim()}</li>`).join('');
      const totalHTML = parts[1] ? `<p style="font-weight:bold;">${parts[1].trim()}</p>` : '';
      const dateHTML = parts[2] ? `<p style="color:gray;">${parts[2].trim()}</p>` : '';

      const mailOptions = {
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

      transporter.sendMail(mailOptions, (err, info) => {
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
    });
  } catch (error) {
    console.error('Error general en envío de email:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.EMAIL_SERVICE_PORT || 5001;
app.listen(PORT, () => console.log(`Email service running on port ${PORT}`));
````

Se realizaron cambios.

---

## Item

delineas: perfecto, para el mailOptions da un valor a cada variable por defecto antes de generar el mailOptions, para no depender en la prueba de los datos que entren por POST

GitHub Copilot: ### [index.js](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/index.js)

Asigna valores por defecto a `email`, `orderDetailsText` y `paymentIntentId` antes de construir `mailOptions`, para que el envío de email funcione aunque no se reciban datos por POST.

````javascript
// ...existing code...
app.post('/api/send-email', async (req, res) => {
  let { email, orderDetailsText, paymentIntentId } = req.body;

  // Valores por defecto para pruebas
  email = email || 'test@example.com';
  orderDetailsText = orderDetailsText || 'Items: Producto Demo x1 | Total: 10€ | Fecha: 2024-01-01T12:00:00Z';
  paymentIntentId = paymentIntentId || 'demo_payment_id';

  if (!email) {
    return res.status(400).json({ error: 'Email es requerido' });
  }

  try {
    nodemailer.createTestAccount(async (err, account) => {
      if (err) {
        console.error('Error al crear cuenta Ethereal:', err);
        return res.status(500).json({ error: 'Error creando cuenta de email' });
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

      // ...existing code...
      const parts = orderDetailsText.split('|');
      const itemsHTML = (parts[0] || '').replace('Items:', '').split(',').map(item => `<li>${item.trim()}</li>`).join('');
      const totalHTML = parts[1] ? `<p style="font-weight:bold;">${parts[1].trim()}</p>` : '';
      const dateHTML = parts[2] ? `<p style="color:gray;">${parts[2].trim()}</p>` : '';

      const mailOptions = {
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
      // ...existing code...
    });
  } catch (error) {
    // ...existing code...
  }
});
// ...existing code...
````

Se realizaron cambios.

---

## Item

delineas: ahora quiero que extraigas la forma de construir el mail de la forma de enviarlo

GitHub Copilot: ### [index.js](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/index.js)

Extrae la construcción del objeto `mailOptions` a una función aparte llamada `buildPurchaseMailOptions`. Así separas la lógica de construcción del email de la de envío.

````javascript
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

app.post('/api/send-email', async (req, res) => {
  let { email, orderDetailsText, paymentIntentId } = req.body;

  // Valores por defecto para pruebas
  email = email || 'test@example.com';
  orderDetailsText = orderDetailsText || 'Items: Producto Demo x1 | Total: 10€ | Fecha: 2024-01-01T12:00:00Z';
  paymentIntentId = paymentIntentId || 'demo_payment_id';

  if (!email) {
    return res.status(400).json({ error: 'Email es requerido' });
  }

  try {
    nodemailer.createTestAccount(async (err, account) => {
      if (err) {
        console.error('Error al crear cuenta Ethereal:', err);
        return res.status(500).json({ error: 'Error creando cuenta de email' });
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

      // Construir mailOptions usando la función extraída
      const mailOptions = buildPurchaseMailOptions({ email, orderDetailsText, paymentIntentId });

      transporter.sendMail(mailOptions, (err, info) => {
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
    });
  } catch (error) {
    console.error('Error general en envío de email:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.EMAIL_SERVICE_PORT || 5001;
app.listen(PORT, () => console.log(`Email service running on port ${PORT}`));
````

Se realizaron cambios.

---

## Item

delineas: ahora quiero que extraigas de la definición del post el envío del email a otra función y que el buildPurchaseMailOptions se llame antes que el envío del email

GitHub Copilot: ### [index.js](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/index.js)

Extrae el envío del email a una función aparte llamada `sendPurchaseEmail`, y llama a `buildPurchaseMailOptions` antes de enviar el email.

````javascript
// ...existing code...

// Construcción del mailOptions extraída a función aparte
function buildPurchaseMailOptions({ email, orderDetailsText, paymentIntentId }) {
  // ...existing code...
}

// Nueva función para enviar el email
function sendPurchaseEmail(mailOptions, callback) {
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

app.post('/api/send-email', async (req, res) => {
  let { email, orderDetailsText, paymentIntentId } = req.body;

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

// ...existing code...
````

Se realizaron cambios.

---

## Item

delineas: y ahora quiero que sendPurchaseEmail tenga dos formas de enviar el email

una usando el createTestAccount de nodemailer

pero la otra, cuando el código esté en el env de produccion, que sea con un envio real con variales SMTP que tenga que tener almacenadas en el fichero .env

GitHub Copilot: ### [index.js](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/index.js)

Modifica `sendPurchaseEmail` para que use un transporte real SMTP en producción (usando variables de entorno) y `createTestAccount` de Nodemailer en desarrollo.

````javascript
// ...existing code...

function sendPurchaseEmail(mailOptions, callback) {
  if (process.env.NODE_ENV === 'production') {
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

// ...existing code...
````

Se realizaron cambios.

---

## Item

delineas: genera el .env.example en email-service

GitHub Copilot: ### [.env.example](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/.env.example)

Ejemplo de variables de entorno necesarias para el envío real de emails por SMTP.

````env
# Puerto donde corre el servicio de email
EMAIL_SERVICE_PORT=5001

# Configuración SMTP para producción
SMTP_HOST=smtp.tu-servidor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario@tu-servidor.com
SMTP_PASS=tu_contraseña

# NODE_ENV=production para activar el envío real
NODE_ENV=development
````

Se realizaron cambios.

---

## Item

delineas: quiero que el ap.post realmente admita get y post

si es get ira como query string y si es post en el body

GitHub Copilot: ### [index.js](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/index.js)

Permite tanto GET como POST en la ruta `/api/send-email`. Si es GET, toma los datos de `req.query`; si es POST, de `req.body`.

````javascript
// ...existing code...

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

// ...existing code...
````

Se realizaron cambios.

---

## Item

delineas: añade al package.json de email-service las dependencias

GitHub Copilot: ### [package.json](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/package.json)

Agrega las dependencias necesarias (`express`, `nodemailer`, `cors`, y `dotenv` para cargar variables de entorno en desarrollo).

````json
{
  "name": "email-service",
  "version": "1.0.0",
  "main": "index.js",
  "type": "commonjs",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "nodemailer": "^6.9.8"
  }
}
````

Se realizaron cambios.

---

## Item

delineas: no estas leyendo las variables de entorno en index.js, verdad?

GitHub Copilot: ### [index.js](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/index.js)

No, actualmente no se están leyendo las variables de entorno automáticamente. Debes cargar el `.env` usando `dotenv` al inicio del archivo.

Agrega esta línea al principio del archivo para asegurar que las variables de entorno estén disponibles:

````javascript
require('dotenv').config();
// ...existing code...
````

Se realizaron cambios.

---

## Item

delineas: crea un readme para index.js explicando como funciona

funciona haciendo un get con http://localhost:5001/api/send-email?email=test@example&paymentIntentId=demo_payment_id&orderDetailsText

también acceso al post

(debería dejarse solo el POST y bajo determinadas condiciones para evitar un uso inapropiado)

copiar el fichero .env.example

para que sirve EMAIL_ENV

configurar el SMTP

servicios de test de envíos de email posible (mailtrap y otros)




GitHub Copilot: ### [README.md](file:///Users/daniel/Sites/lab/calambrazo-lima-sierra/backend/email-service/README.md)

````markdown
# Email Service

Servicio Express para enviar emails de confirmación de compra, pensado para integrarse con aplicaciones de backend o frontend.

## Uso

### Envío de email por GET (solo para pruebas)

Puedes probar el servicio accediendo a:

```
http://localhost:5001/api/send-email?email=test@example.com&paymentIntentId=demo_payment_id&orderDetailsText=Items:%20Producto%20Demo%20x1%20|%20Total:%2010€%20|%20Fecha:%202024-01-01T12:00:00Z
```

### Envío de email por POST (recomendado)

Haz un POST a `/api/send-email` con un JSON en el body:

```json
{
  "email": "test@example.com",
  "paymentIntentId": "demo_payment_id",
  "orderDetailsText": "Items: Producto Demo x1 | Total: 10€ | Fecha: 2024-01-01T12:00:00Z"
}
```

> **Nota:** Aunque el endpoint acepta GET y POST, **se recomienda dejar solo POST en producción** y proteger el endpoint para evitar usos indebidos.

## Configuración

1. Copia el archivo `.env.example` a `.env` y edítalo según tus necesidades:

```bash
cp .env.example .env
```

2. Configura las variables SMTP para envío real de emails.

### Variables importantes

- `EMAIL_ENV`:  
  - Si es `production`, se usará el envío real por SMTP.
  - Si es cualquier otro valor (o no está definida), se usará un servicio de pruebas (Ethereal).

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`:  
  Configuración de tu servidor SMTP real.

- `PORT`:  
  Puerto donde se ejecuta el servicio (por defecto 5001).

## Servicios de test de envío de email

- **Ethereal**:  
  Por defecto, en desarrollo, el servicio usa Ethereal (https://ethereal.email/) para pruebas. No envía emails reales, pero puedes ver una URL de previsualización en consola.

- **Mailtrap**:  
  Puedes usar Mailtrap (https://mailtrap.io/) para pruebas de envío real. Solo tienes que poner los datos SMTP de Mailtrap en tu `.env`.

- **Otros servicios SMTP**:  
  Puedes usar cualquier proveedor SMTP (Gmail, SendGrid, Mailgun, etc.) configurando las variables de entorno.

## Seguridad

- **IMPORTANTE:**  
  El endpoint GET está pensado solo para pruebas.  
  En producción, elimina el soporte GET y protege el endpoint POST (por ejemplo, con autenticación o validación de origen).

## Ejecución

Instala las dependencias y ejecuta el servicio:

```bash
npm install
npm start
```

El servicio quedará escuchando en el puerto configurado (por defecto 5001).

---
````

Se realizaron cambios.
