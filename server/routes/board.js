const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  listBoard,
  handleBoard,
  deleteColumn,
  deleteCard
} = require('../controllers/board');

router.route('/list').get(protect, listBoard);
router.route('/handle').put(protect, handleBoard);
router.route('/delete-column').delete(protect, deleteColumn);
router.route('/delete-card').delete(protect, deleteCard);


module.exports = router;
