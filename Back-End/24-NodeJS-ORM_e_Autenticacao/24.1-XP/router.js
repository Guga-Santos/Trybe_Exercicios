const express = require('express');
const courseController = require('./controllers/course.controller');

const router = express.Router();

router.use('/course', courseController);

module.exports = router;