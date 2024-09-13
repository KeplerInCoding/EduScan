const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

exports.uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { path, originalname } = req.file;

  try {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(path), originalname);

    const response = await axios.post('ML_MODEL_API_ENDPOINT', formData, {
      headers: { ...formData.getHeaders() },
    });

    // Send back the response from the ML model
    res.status(200).json(response.data);

    // Clean up the temporary file
    fs.unlinkSync(path);
  } catch (error) {
    console.error('Error processing file with ML model:', error);
    res.status(500).json({ message: 'Error processing file' });
  }
};
