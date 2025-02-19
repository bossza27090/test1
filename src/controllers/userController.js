// src/controllers/userController.js
const User = require('../models/userModel');

// ฟังก์ชันในการสร้างผู้ใช้ใหม่
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // สร้างผู้ใช้ใหม่ใน PostgreSQL
    const newUser = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
};

module.exports = { createUser };