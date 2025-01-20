const express = require('express');

const app = express();
const SERVER_PORT = 1245;

app.get('/', (_, result) => {
  result.send('Hello ALX!!');
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on PORT ${SERVER_PORT}`);
});

module.exports = app;
