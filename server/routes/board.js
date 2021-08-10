const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  listBoard,
  handleBoard,
} = require('../controllers/board');
const { validateHandleBoard } = require('../validations/board');

router.route('/list').get(protect, listBoard);
router.route('/handle').put(protect,validateHandleBoard, handleBoard);



module.exports = router;
