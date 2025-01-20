const http = require('http');

const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';

const serverApp = http.createServer((req, res) => {
  const responseMessage = 'Hello ALX!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMessage.length);
  res.statusCode = 200;

  res.write(responseMessage);
  res.end();
});

serverApp.listen(SERVER_PORT, SERVER_HOST, () => {
  process.stdout.write(`Server listening at http://${SERVER_HOST}:${SERVER_PORT}\n`);
});

module.exports = serverApp;
