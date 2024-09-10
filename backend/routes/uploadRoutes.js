const express = require('express');
const { uploadFile } = require('../controllers/uploadController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Save uploaded files temporarily
const router = express.Router();

router.post('/', upload.single('file'), uploadFile);

module.exports = router;
