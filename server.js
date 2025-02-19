// server.js
const express = require('express');
const dotenv = require('dotenv');
// โหลดค่าจากไฟล์ .env
dotenv.config();

const { connectDB } = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

// สร้างแอป Express
const app = express();
const port = process.env.PORT || 3000;

// เชื่อมต่อกับฐานข้อมูล PostgreSQL
connectDB();

// ตั้งค่า body parser เพื่อให้รับข้อมูล JSON
app.use(express.json());
// ตั้งค่าเส้นทาง
app.use('/api', userRoutes);

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
