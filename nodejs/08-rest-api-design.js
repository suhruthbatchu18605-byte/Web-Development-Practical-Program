// 08. RESTful API Best Practices & HTTP Status Codes
const express = require('express');
const app = express();
app.use(express.json());

// 200 OK
app.get('/api/items', (req, res) => res.status(200).json({ status: 'success', data: [] }));

// 201 Created
app.post('/api/items', (req, res) => res.status(201).json({ status: 'created', data: req.body }));

// 400 Bad Request
app.post('/api/items/validate', (req, res) => {
  if (!req.body.name) return res.status(400).json({ status: 'fail', error: 'Field "name" is required' });
  res.status(200).json({ status: 'success' });
});

// 500 Internal Server Error Handler
app.use((err, req, res, next) => res.status(500).json({ status: 'error', message: err.message }));

app.listen(3006, () => console.log('REST API running on port 3006'));
