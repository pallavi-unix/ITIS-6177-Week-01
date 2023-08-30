console.log("Hello World!");

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is a Node.js server.');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is listening on http://127.0.0.1:3000');
});
