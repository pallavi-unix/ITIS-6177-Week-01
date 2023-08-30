console.log("Hello World!");

const http = require('http');

const express = require('express');
const app = express();
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is a Node.js server.');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is listening on http://127.0.0.1:3000');
});

app.get('/', (req, res) => {
    res.send('This is an Express server.');
});
  
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
