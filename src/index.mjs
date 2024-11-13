// src/index.mjs
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Docker is easy 🐳' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );

// Export the app for testing
export default app;
