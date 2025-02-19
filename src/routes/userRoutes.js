// src/routes/userRoutes.js
const express = require('express');
const { createUser } = require('../controllers/userController');
const router = express.Router();

// เส้นทางสำหรับสร้างผู้ใช้ใหม่
router.post('/users', createUser);


module.exports = router;