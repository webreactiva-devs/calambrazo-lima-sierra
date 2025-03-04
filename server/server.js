const stripe = require('stripe')('sk_test_51QueLBD18AzjHdhjBwGAk4Ziq3RhelB7UZ2ARksd3lVNpqVJ7EKiWNrFRLWfyEKfLXjQMQu6w9a5EI5h33SqEuju00sRnUlCRU');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

const YOUR_DOMAIN = 'http://localhost:4242';

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
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
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

app.listen(4242, () => console.log('Running on port 4242'));
