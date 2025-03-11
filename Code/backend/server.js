const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://10.54.1.202:27017/GazePlayDB';

// CORS configuration
app.use(cors({
    origin: '*', // Be more restrictive in production
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// Middleware
app.use(express.json());
app.use(cors());

// Simple test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running!' });
  });

// Routes
app.use('/api/auth', authRoutes);



// Connect to MongoDB and Start Server
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch(error => console.log('MongoDB connection error:', error));