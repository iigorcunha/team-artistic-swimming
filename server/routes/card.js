const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { editCard, deleteCard } = require('../controllers/card');
const { validateCardEdit } = require('../validations/card');

router.route('/edit/:_id').put(protect, validateCardEdit, editCard);
router.route('/:_id').delete(protect, deleteCard);


module.exports = router;