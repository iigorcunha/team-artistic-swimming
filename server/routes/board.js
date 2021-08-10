const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  listBoard,
  createBoard,
  handleBoard,
  deleteColumn,
  deleteCard
} = require('../controllers/board');

router.route('/list/:id').get(protect, listBoard);
router.route('/create').post(protect, createBoard);
router.route('/handle').put(protect, handleBoard);
router.route('/delete-column').delete(protect, deleteColumn);
router.route('/delete-card').delete(protect, deleteCard);


module.exports = router;
