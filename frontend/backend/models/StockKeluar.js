import mongoose from 'mongoose';

// Define the schema for StockKeluar
const stockKeluarSchema = new mongoose.Schema({
  productId: { 
    type: String, 
    required: true 
  },
  productName: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: true, 
    min: 0 // Ensuring quantity is non-negative
  },
  handledBy: { 
    type: String, 
    required: true // Name of the person handling the stock out
  },
  barangDiTerima: { 
    type: Boolean
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create the model from the schema
const StockKeluar = mongoose.model('StockKeluar', stockKeluarSchema);

export default StockKeluar;
