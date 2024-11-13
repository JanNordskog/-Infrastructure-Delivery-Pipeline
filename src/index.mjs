// src/index.mjs
import express from 'express';

const app = express();
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Docker is easy 🐳' });
});

// Route to get a user by ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
});

// Route to create a new user
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  res.status(201).json({ id: Date.now(), name, email });
});

// Route to echo a query parameter
app.get('/echo', (req, res) => {
  const message = req.query.message || 'No message provided';
  res.json({ echo: message });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));

export default app;
