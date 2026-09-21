// 01. Basic Client-Server Architecture & HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  res.setHeader('Content-Type', 'application/json');
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: 'success', message: 'Hello from Node.js HTTP Server!' }));
  } else if (req.url === '/api/info') {
    res.statusCode = 200;
    res.end(JSON.stringify({ platform: process.platform, nodeVersion: process.version, uptime: process.uptime() }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ status: 'error', message: 'Route Not Found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
