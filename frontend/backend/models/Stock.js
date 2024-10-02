import mongoose from 'mongoose';

// Define the schema for stock
const stockSchema = new mongoose.Schema({
  productId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  itemType: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true, 
    min: 0, // Ensuring quantity is non-negative
    default: 0 // Optional: Default to 0 if not specified
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Create the model from the schema
const Stock = mongoose.model('Stock', stockSchema);
export default Stock; // ESM export
