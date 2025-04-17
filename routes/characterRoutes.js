const express = require('express');
const router = express.Router();
const Character = require('../models/Character');

// Lấy tất cả nhân vật
router.get('/characters', async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

// Thêm nhân vật mới
router.post('/characters', async (req, res) => {
  try {
    const character = new Character(req.body);
    const saved = await character.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
