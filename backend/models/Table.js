const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  data: [
    {
      studentName: { type: String, required: true },
      rollNumber: { type: String, required: true },
      totalMarks: { type: Number, required: true },
      subject: { type: String, required: true },

      question1AMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1BMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1CMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1DMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1EMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1FMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1GMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1HMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1IMarks: { type: Number, min: 0, max: 2, default: 0 },
      question1JMarks: { type: Number, min: 0, max: 2, default: 0 },

      question2Marks: { type: Number, min: 0, max: 6, default: 0 },
      question3Marks: { type: Number, min: 0, max: 6, default: 0 },
      question4Marks: { type: Number, min: 0, max: 6, default: 0 },
      question5Marks: { type: Number, min: 0, max: 6, default: 0 },
      question6Marks: { type: Number, min: 0, max: 6, default: 0 },

      question7Marks: { type: Number, min: 0, max: 10, default: 0 },
      question8Marks: { type: Number, min: 0, max: 10, default: 0 },
      question9Marks: { type: Number, min: 0, max: 10, default: 0 },
      question10Marks: { type: Number, min: 0, max: 10, default: 0 },
      question11Marks: { type: Number, min: 0, max: 10, default: 0 },

      status: { type: String, enum: ['Valid', 'Needs Attention'], default: 'Valid' }
    },
  ],
});

module.exports = mongoose.model('Table', tableSchema);
