import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  color: { type: String, required: true }, // Nama warna
  stock: { type: Number, required: true, default: 0 } // Stok untuk setiap warna
});

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true }, // ID unik untuk produk
  productName: { type: String, required: true }, // Nama produk
  colors: [colorSchema], // Daftar warna dan stok per warna
  totalStock: { type: Number, required: true, default: 0 } // Stok total produk
});

// Buat model Product berdasarkan schema productSchema
const Product = mongoose.model('Product2', productSchema);

export default Product; // ESM export
