const Table = require('../models/Table');

// Fetch all table data
exports.getTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new parsed data (dummy data for now)
exports.addTableData = async (req, res) => {
  const { data } = req.body;
  console.log("Request Body:", req.body);
  
  if (!data || !Array.isArray(data)) {
    console.error("Error: 'data' field is missing or not an array");
    return res.status(400).json({ message: "'data' field is required and must be an array" });
  }

  // Validate and update the status of each entry
  const validatedData = data.map(entry => {
    const totalQuestionMarks = (entry.question1Marks || 0) + (entry.question2Marks || 0) + (entry.question3Marks || 0) + (entry.question4Marks || 0);
    const isValid = totalQuestionMarks === entry.totalMarks;
    return {
      ...entry,
      status: isValid ? 'Valid' : 'Needs Attention'
    };
  });

  try {
    console.log("Creating new Table entry with data:", validatedData);
    const newTable = new Table({ data: validatedData });
    await newTable.save();
    console.log("Table entry saved successfully:", newTable);
    res.status(201).json(newTable);
  } catch (error) {
    console.error("Error occurred while saving table data:", error);
    res.status(500).json({ message: error.message });
  }
};



// Update table data
exports.updateTableData = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  try {
    const updatedTable = await Table.findByIdAndUpdate(id, { data }, { new: true });
    res.status(200).json(updatedTable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete table data
exports.deleteTableData = async (req, res) => {
  const { id } = req.params;

  try {
    await Table.findByIdAndDelete(id);
    res.status(204).json({ message: 'Table data deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};