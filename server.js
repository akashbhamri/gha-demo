const http = require('http');

const port = process.env.PORT || 3000;
const env = process.env.APP_ENV || 'unknown';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from gha-demo\nEnvironment: ${env}\n`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

