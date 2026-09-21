// 03. Express Framework Basics: GET/POST, Static Files & JSON
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Express Server Running</h1>');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Suhruth Kotha', role: 'Student' },
    { id: 2, name: 'Jane Doe', role: 'Instructor' }
  ]);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Express listening on port ${PORT}`));
