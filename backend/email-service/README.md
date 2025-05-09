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


## Chat history

Tienes la historia del chat que ha construido esto en la carpeta `docs`

## Ejecución

Instala las dependencias y ejecuta el servicio:

```bash
npm install
npm start
```

El servicio quedará escuchando en el puerto configurado (por defecto 5001).

---


