
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Import routes
const studentRoutes = require('./routes/studentRoutes');

// Use routes
app.use('/', studentRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
