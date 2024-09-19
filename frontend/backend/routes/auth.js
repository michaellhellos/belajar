import { Router } from 'express';
import { sign } from 'jsonwebtoken';
// eslint-disable-next-line no-unused-vars
import bcrypt from 'bcryptjs';
// eslint-disable-next-line no-unused-vars, no-undef
const User = require('./models/User');

const router = Router();

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if the password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a token
    const token = sign({ userId: user._id }, 'your_jwt_secret', {
      expiresIn: '1h',
    });

    // Send token as response
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
