const express = require('express');
const {
  getTables,
  addTableData,
  updateTableData,
  deleteTableData,
} = require('../controllers/tableController');

const router = express.Router();

router.get('/', getTables);
router.post('/', addTableData);
router.put('/:id', updateTableData);
router.delete('/:id', deleteTableData);

module.exports = router;