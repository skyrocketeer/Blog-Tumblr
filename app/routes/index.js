const express = require('express');
const router = express.Router();

const userRoutes = require('./api/users');
router.use('/api/users', userRoutes);

const authRoutes = require('./auth');
router.use('/auth', authRoutes);

module.exports = router;