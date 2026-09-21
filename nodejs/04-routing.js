// 04. Express Routing: Route & Query Parameters, 404 Handling
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());

// Query Parameters: /api/search?q=javascript
app.get('/api/search', (req, res) => {
  const query = req.query.q || '';
  res.json({ search: query, results: [`Result for ${query}`] });
});

// Route Parameters: /api/students/:id
app.get('/api/students/:id', (req, res) => {
  const studentId = req.params.id;
  res.json({ id: studentId, name: `Student #${studentId}` });
});

// Modular Router
router.get('/', (req, res) => res.json({ message: 'Products listing' }));
router.get('/:id', (req, res) => res.json({ productId: req.params.id }));
app.use('/api/products', router);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: '404 - Not Found' });
});

app.listen(3002, () => console.log('Routing demo running on port 3002'));
