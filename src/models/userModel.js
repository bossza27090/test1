// src/models/userModel.js
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // การเชื่อมต่อกับ PostgreSQL

// สร้าง Model สำหรับ User
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at", // ระบุชื่อคอลัมน์จริง
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: "updated_at", // ระบุชื่อคอลัมน์จริง
  },
}, {
  tableName: 'users_test', // ชื่อ table ที่ใช้ในฐานข้อมูล
});

module.exports = User;