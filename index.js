// server.mjs
import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end('{"message": "Hello"}');
});
const port = process.env.PORT || 4000 
// starts a simple http server locally on port 3000
server.listen(port, '0.0.0.0', () => {
  console.log('Listening on 127.0.0.1:10000');
});