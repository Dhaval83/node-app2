// server.mjs
import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('{"message": "Hello"}');
});
// starts a simple http server locally on port 3000
server.listen(10000, '0.0.0.0', () => {
  console.log('Listening on 127.0.0.1:10000');
});