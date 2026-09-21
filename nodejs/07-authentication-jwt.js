// 07. Authentication: Registration, Password Hashing & JWT
const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

const users = [];

// Hash password with SHA-256
function hashPassword(pass) {
  return crypto.createHash('sha256').update(pass).digest('hex');
}

// User Registration
app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ error: 'User already exists' });
  
  const user = { id: users.length + 1, email, passwordHash: hashPassword(password) };
  users.push(user);
  res.status(201).json({ message: 'User registered successfully', userId: user.id });
});

// User Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.passwordHash === hashPassword(password));
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Create simple token payload
  const token = Buffer.from(JSON.stringify({ id: user.id, email: user.email, exp: Date.now() + 3600000 })).toString('base64');
  res.json({ message: 'Login successful', token });
});

app.listen(3005, () => console.log('Auth API running on port 3005'));
