const http = require('http');

const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';
const server = http.createServer();

server.on('request', (_, response) => {
  const message = 'Hello ALX!';

  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', message.length);
  response.statusCode = 200;
  response.write(Buffer.from(message));
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  process.stdout.write(`Server is live at -> http://${SERVER_HOST}:${SERVER_PORT}\n`);
});

module.exports = server;
