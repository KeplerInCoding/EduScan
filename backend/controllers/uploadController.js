const path = require('path');
const fs = require('fs');

// Dummy function to simulate saving a file locally
exports.uploadFile = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  // Move the file to the uploads directory
  const uploadPath = path.join(__dirname, '../uploads', file.originalname);
  fs.renameSync(file.path, uploadPath);

  res.send({ message: 'File uploaded successfully', filePath: uploadPath });
};