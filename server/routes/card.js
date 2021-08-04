const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { editCard } = require('../controllers/card');
const { validateCardEdit } = require('../validate');

router.route('/edit/:id').put(protect, validateCardEdit, editCard);


module.exports = router;