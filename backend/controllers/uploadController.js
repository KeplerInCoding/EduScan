const axios = require('axios'); // Use axios to send HTTP requests

exports.uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { path, originalname } = req.file;

  try {
    // Prepare the file for sending to the ML model
    const fileData = {
      file: {
        value: require('fs').createReadStream(path),
        options: {
          filename: originalname,
          contentType: req.file.mimetype,
        },
      },
    };

    // Send the file to the ML model's API endpoint
    const response = await axios.post('ML_MODEL_API_ENDPOINT', fileData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Return the result from the ML model to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error processing file with ML model:', error);
    res.status(500).json({ message: 'Error processing file' });
  }
};
