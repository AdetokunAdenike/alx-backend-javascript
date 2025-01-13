const express = require('express');

const app = express();
const port = 7865;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
