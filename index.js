const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const characterRoutes = require('./routes/characterRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use('/', characterRoutes);

// Kết nối MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});
