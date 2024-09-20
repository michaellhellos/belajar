import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Proyek', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Koneksi ke MongoDB berhasil'))
  .catch((err) => console.error('Koneksi ke MongoDB gagal', err));

app.use('/', authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
