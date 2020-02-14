const express = require('express');
const router = express.Router();

const userRouter = require('./api/users');
const sportRouter = require('./api/sports');
router.use('/api/users', userRouter);
router.use('/api/sports', sportRouter);

module.exports = router;