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

  try {
    const newTable = new Table({ data });
    await newTable.save();
    res.status(201).json(newTable);
  } catch (error) {
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