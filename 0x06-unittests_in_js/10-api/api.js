const express = require('express');

const app = express();
const port = 7865;

app.use(express.json()); // Middleware to parse JSON request bodies

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Available payments route
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
