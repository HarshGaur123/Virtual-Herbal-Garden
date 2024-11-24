
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./route'); // Make sure this path is correct

const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Use the routes defined in route.js
app.use('/', route);

// Sample route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
