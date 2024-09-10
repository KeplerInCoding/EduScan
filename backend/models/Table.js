const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  data: [
    {
      studentName: { type: String, required: true },
      rollNumber: { type: String, required: true },
      marks: { type: Number, required: true },
      totalMarks: { type: Number, required: true },
      subject: { type: String, required: true },
      question1Marks: { type: Number, min: 0, max: 20, default: 0 },
      question2Marks: { type: Number, min: 0, max: 20, default: 0 },
      question3Marks: { type: Number, min: 0, max: 20, default: 0 },
      question4Marks: { type: Number, min: 0, max: 20, default: 0 },
      status: { type: String, enum: ['Valid', 'Needs Attention'], default: 'Valid' }
    },
  ],
});

module.exports = mongoose.model('Table', tableSchema);
