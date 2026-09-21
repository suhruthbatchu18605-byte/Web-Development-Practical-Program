// 06. Complete CRUD Operations (Student Management)
const express = require('express');
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: 'Suhruth Kotha', dept: 'CSE', gpa: 9.24 },
  { id: 2, name: 'Jane Doe', dept: 'AI', gpa: 8.95 }
];

// CREATE
app.post('/api/students', (req, res) => {
  const { name, dept, gpa } = req.body;
  if (!name || !dept) return res.status(400).json({ error: 'Name and Dept required' });
  const newStudent = { id: students.length + 1, name, dept, gpa: parseFloat(gpa) || 0 };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// READ (ALL)
app.get('/api/students', (req, res) => res.json(students));

// READ (ONE)
app.get('/api/students/:id', (req, res) => {
  const s = students.find(x => x.id === parseInt(req.params.id));
  if (!s) return res.status(404).json({ error: 'Student not found' });
  res.json(s);
});

// UPDATE
app.put('/api/students/:id', (req, res) => {
  const s = students.find(x => x.id === parseInt(req.params.id));
  if (!s) return res.status(404).json({ error: 'Student not found' });
  const { name, dept, gpa } = req.body;
  if (name) s.name = name;
  if (dept) s.dept = dept;
  if (gpa) s.gpa = parseFloat(gpa);
  res.json(s);
});

// DELETE
app.delete('/api/students/:id', (req, res) => {
  const idx = students.findIndex(x => x.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Student not found' });
  const deleted = students.splice(idx, 1);
  res.json({ message: 'Deleted successfully', student: deleted[0] });
});

app.listen(3004, () => console.log('CRUD API running on port 3004'));
