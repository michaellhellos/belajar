// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true }, // Active status
  role: { type: String, enum: ['admin', 'warehouse_manager', 'employee'], default: 'employee' } // Add this line
});

const User = mongoose.model('User', userSchema);
export default User;
