// Live Express Server for Practical Programs Website
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all static frontend files (HTML, CSS, JS, Assets)
app.use(express.static(__dirname));

// Live API Endpoints for testing
let students = [
  { id: 1, name: 'Suhruth Kotha', dept: 'CSE', gpa: 9.24 },
  { id: 2, name: 'Jane Doe', dept: 'AI', gpa: 8.95 }
];

app.get('/api/students', (req, res) => res.json(students));
app.post('/api/students', (req, res) => {
  const { name, dept, gpa } = req.body;
  const newStudent = { id: students.length + 1, name, dept, gpa: parseFloat(gpa) || 0 };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 101, title: 'Wireless Headphones', price: 199.99 },
    { id: 102, title: 'Smart Watch', price: 149.00 }
  ]);
});

app.post('/api/auth/login', (req, res) => {
  const { email } = req.body;
  res.json({ message: 'Login successful', token: 'sample-jwt-token', email });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`Practical Programs Server running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser.`);
  console.log(`=======================================================`);
});
