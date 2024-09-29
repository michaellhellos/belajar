import express from 'express';
import User from '../models/user.js';
import Product from '../models/Product.js';
import Products from '../models/Product2.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const router = express.Router();
//file multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify your upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to the file name
  }
});

const upload = multer({ storage });
// Route untuk registrasi
router.post('/registerkariawan', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password harus diisi' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'Registrasi berhasil' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
});
//login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password harus diisi' });
  }

  try {
    // Check for admin credentials
    if (email === 'admin123@gmail.com' && password === 'admin123') {
      return res.status(200).json({ message: 'Selamat datang admin', isAdmin: true });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    // Check if the user is active
    if (!user.isActive) {
      return res.status(403).json({ message: 'Anda sudah keluar' });
    }

    // Assuming you have hashed passwords (replace with real hash comparison)
    const isMatch = password === user.password; 
    if (!isMatch) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    res.status(200).json({ message: 'Login sukses', isAdmin: false });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
});


//admin tambah product
router.post('/add-product', upload.single('image'), async (req, res) => {
  const { name, price, stock } = req.body; // Include stock in destructuring
  const image = req.file.path;

  if (!name || !price || !image || stock === undefined) {
    return res.status(400).json({ message: 'Nama, harga, gambar, dan stok harus diisi' });
  }

  try {
    const productsCount = await Product.countDocuments();
    const productId = `ba${String(productsCount + 1).padStart(3, '0')}`;

    const product = new Product({ productId, name, price, image, stock: Number(stock) }); // Convert stock to number
    await product.save();
    
    res.status(201).json({ message: 'Produk berhasil ditambahkan', product });
  } catch (error) {
    console.error('Error during adding product:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
});
//admin liat nama kariawan
router.get('/kariawan', async (req, res) => {
  try {
    const users = await User.find({}, 'email'); // Fetch only the email field
    const count = users.length; // Get the total count of users

    res.status(200).json({ count, users });
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
});
//menoaktif kan kariawan 
router.patch('/dinonaktifkan/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { isActive: false }, // Set isActive to false
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
    }

    res.status(200).json({ message: 'Karyawan berhasil dinonaktifkan', user });
  } catch (error) {
    console.error('Error during deactivation:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
});

// Route untuk mengaktifkan kembali karyawan
router.patch('/mengaktifkan/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { isActive: true }, // Set isActive to true
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
    }

    res.status(200).json({ message: 'Karyawan berhasil diaktifkan kembali', user });
  } catch (error) {
    console.error('Error during reactivation:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
});
//melihat semua barang yang ada di databse nya 
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

//membeli product
router.post('/purchase', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findOne({ productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Not enough stock available' });
    }
    const totalPrice = product.price * quantity;
    product.stock -= quantity;
    await product.save();
    res.json({
      message: 'Purchase successful',
      totalPrice
      // remainingStock: product.stock
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing purchase' });
  }
});



//nambahakan stock koper nya 
router.post('/Tambah_koper', async (req, res) => {
  try {
    const { productId, productName, colors, totalStock } = req.body;

    // Buat objek Product baru
    const newProducts = new Products({
      productId,
      productName,
      colors,
      totalStock
    });

    // Simpan produk ke database
    await newProducts.save();

    res.status(201).json({ message: 'Product added successfully', products: newProducts });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
});


export default router;
