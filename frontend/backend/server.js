const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tokobersama', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB:', err));

// Define the User schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Explicitly set the collection name to "anggota"
const User = mongoose.model('User', userSchema, 'anggota');

// API route for registering a user
app.post('/register', async (req, res) => {
    console.log('Received registration data:', req.body);  // Log untuk memeriksa data yang diterima
    try {
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      console.log('User registered successfully');
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during registration:', error);  // Log untuk melihat detail error
      if (error.code === 11000) {
        res.status(400).json({ message: 'Email already in use' });
      } else {
        res.status(500).json({ message: 'Error registering user', error });
      }
    }
  });
  
