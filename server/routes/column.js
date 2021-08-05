const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  deleteColumn
} = require('../controllers/column');


router.route('/:_id').delete(protect, deleteColumn);

module.exports = router;