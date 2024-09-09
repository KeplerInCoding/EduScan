const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  data: [
    {
      studentName: String,
      rollNumber: String,
      marks: Number,
      totalMarks: Number,
      subject: String,
    },
  ],
});

module.exports = mongoose.model('Table', tableSchema);