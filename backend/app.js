// backend/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors'); // Import the cors module
const crypto = require('crypto');

// Sequelize models
const User = require('./models/user');

// Apply the cors middleware to allow requests from localhost:4200
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());

// Create a new user
app.post('/users', async (req, res) => {
  try {
    req.body.password = crypto.createHash('sha256').update(req.body.password).digest('hex');
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
