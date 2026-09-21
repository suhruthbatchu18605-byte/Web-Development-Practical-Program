// 05. Middleware: Custom, Logging, Auth, and Error-Handling
const express = require('express');
const app = express();

// 1. Logging Middleware
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
});

// 2. Authentication Middleware
const requireAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader === 'Bearer secret-token') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized: Invalid or missing token' });
  }
};

app.get('/api/public', (req, res) => res.json({ msg: 'Public access granted' }));
app.get('/api/protected', requireAuth, (req, res) => res.json({ msg: 'Protected data retrieved' }));

// 3. Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error', detail: err.message });
});

app.listen(3003, () => console.log('Middleware demo on port 3003'));
