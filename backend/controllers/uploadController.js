const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

// exports.uploadFile = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const { path, originalname } = req.file;

//   try {
//     const formData = new FormData();
//     formData.append('file', fs.createReadStream(path), originalname);

//     const response = await axios.post('ML_MODEL_API_ENDPOINT', formData, {
//       headers: { ...formData.getHeaders() },
//     });

//     // Send back the response from the ML model
//     res.status(200).json(response.data);

//     // Clean up the temporary file
//     fs.unlinkSync(path);
//   } catch (error) {
//     console.error('Error processing file with ML model:', error);
//     res.status(500).json({ message: 'Error processing file' });
//   }
// };


exports.uploadFile = async (req, res) => {
  if (!req.file) {
    console.log('error in upload controller');
    return res.status(400).json({ message: 'No file uploaded' });
  }

  console.log('File uploaded:', req.file);

  const { path, originalname } = req.file;

  try {
    // Simulate processing by returning a dummy response
    const dummyResponse = {
      message: 'File processed successfully',
      data: {
        extractedText: [
          { field: 'Student Name', value: 'Isha Verma' },
          { field: 'Roll Number', value: '2023001' },
          { field: 'Marks', value: '78' },
          { field: 'Total Marks', value: '100' },
          { field: 'Subject', value: 'Mathematics' },
          { field: 'Question 1 Marks', value: '18' },
          { field: 'Question 2 Marks', value: '20' },
          { field: 'Question 3 Marks', value: '15' },
          { field: 'Question 4 Marks', value: '25' },
          { field: 'Status', value: 'Valid' },
        ],
      },
    };
    

    // Clean up the temporary file
    fs.unlinkSync(path);

    // Send the dummy response
    res.status(200).json(dummyResponse);
  } catch (error) {
    console.error('Error processing file (dummy):', error.message);
    res.status(500).json({ message: 'Error processing file' });
  }
};
