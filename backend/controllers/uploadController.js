const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

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
          { field: 'Student Name', value: 'Dhruv Gupta' },
          { field: 'Roll Number', value: '2100290100055' },
          { field: 'Total Marks', value: '83' },
          { field: 'Subject', value: 'CD' },
      
          { field: 'Question 1A Marks', value: '2' },
          { field: 'Question 1B Marks', value: '1' },
          { field: 'Question 1C Marks', value: '1' },
          { field: 'Question 1D Marks', value: '2' },
          { field: 'Question 1E Marks', value: '2' },
          { field: 'Question 1F Marks', value: '2' },
          { field: 'Question 1G Marks', value: '2' },
          { field: 'Question 1H Marks', value: '1' },
          { field: 'Question 1I Marks', value: '0' },
          { field: 'Question 1J Marks', value: '0' },
      
          { field: 'Question 2 Marks', value: '6' },
          { field: 'Question 3 Marks', value: '6' },
          { field: 'Question 4 Marks', value: '3' },
          { field: 'Question 5 Marks', value: '6' },
          { field: 'Question 6 Marks', value: '6' },
      
          { field: 'Question 7 Marks', value: '10' },
          { field: 'Question 8 Marks', value: '10' },
          { field: 'Question 9 Marks', value: '10' },
          { field: 'Question 10 Marks', value: '6' },
          { field: 'Question 11 Marks', value: '7' },
      
          { field: 'Status', value: 'Valid' }
        ]
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





// exports.uploadFile = async (req, res) => {
//   if (!req.file) {
//     console.log('No file uploaded');
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const { path, originalname } = req.file;

//   try {
//     // Get file extension, e.g. PNG, JPG, PDF
//     const fileExtension = originalname.split('.').pop().toUpperCase();

//     const formData = new FormData();
//     formData.append('file', fs.createReadStream(path));
//     formData.append('filetype', fileExtension); // Specify file type to OCR API
//     formData.append('language', 'eng');
//     formData.append('isOverlayRequired', 'false');

//     const response = await axios.post('https://api.ocr.space/parse/image', formData, {
//       headers: {
//         ...formData.getHeaders(),
//         apikey: 'K86968833388957',
//       },
//       maxContentLength: Infinity,
//       maxBodyLength: Infinity,
//     });

//     // Delete temp file after processing
//     fs.unlinkSync(path);

//     const ocrData = response.data;

//     if (!ocrData.IsErroredOnProcessing && ocrData.ParsedResults && ocrData.ParsedResults.length > 0) {
//       const extractedText = ocrData.ParsedResults[0].ParsedText;

//       // Parse extracted text to structured fields
//       const extractedFields = parseExtractedTextToFields(extractedText);

//       const formattedResponse = {
//         message: 'File processed successfully',
//         data: {
//           extractedText: extractedFields
//         }
//       };

//       res.status(200).json(formattedResponse);
//     } else {
//       console.error('OCR API error:', ocrData.ErrorMessage || 'Unknown error');
//       res.status(500).json({ message: 'Error in OCR processing' });
//     }

//   } catch (error) {
//     console.error('Error during OCR processing:', error.message);
//     // Ensure temp file deleted on error too
//     if (fs.existsSync(path)) {
//       fs.unlinkSync(path);
//     }
//     res.status(500).json({ message: 'Error processing file' });
//   }
// };

// // Helper: Parses text like "Field: Value" lines into [{field, value}, ...]
// function parseExtractedTextToFields(extractedText) {
//   const lines = extractedText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
//   const extractedFields = [];

//   lines.forEach(line => {
//     const parts = line.split(':');
//     if (parts.length >= 2) {
//       const field = parts[0].trim();
//       const value = parts.slice(1).join(':').trim();
//       extractedFields.push({ field, value });
//     }
//   });

//   console.log("extractedFields :");
//   console.log(extractedFields);

//   return extractedFields;
// }
