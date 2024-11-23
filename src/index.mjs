// src/index.mjs
import express from "express";

const app = express();
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.json({ message: "Docker is easy 🐳" });
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@example.com`,
  });
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  res.status(201).json({ id: Date.now(), name, email });
});

app.get("/echo", (req, res) => {
  const message = req.query.message || "No message provided";
  res.json({ echo: message });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);

export { app, server }; // Export both app and server