
// src/config/db.js
const { Sequelize } = require('sequelize');

// สร้างการเชื่อมต่อกับ PostgreSQL
const sequelize = new Sequelize('postgres://iam-ctrl-sprintz-tech:t{daV4EQyv>]DQj@34.142.221.185:5432/iam-ctrl-sprintz-tech', {
  dialect: 'postgres',
  logging: false, // ปิดการแสดงผล log
});

const connectDB = async () => {
  try {
    await sequelize.authenticate(); // ทดสอบการเชื่อมต่อ
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // หยุดการทำงานของแอปถ้าการเชื่อมต่อล้มเหลว
  }
};

module.exports = { sequelize, connectDB };