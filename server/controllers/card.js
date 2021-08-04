const Card = require("../models/Card");
const asyncHandler = require("express-async-handler");

// @route POST /users
// @desc Search for users
// @access Private
exports.editCard = asyncHandler(async (req, res, next) => {

  const { id } = req.params;

  const {
    colorCode,
    tags,
    attachments
  } = req.body;

  try {
    await Card.findOneAndUpdate({_id: id}, {
      colorCode,
      tags,
      attachments
    });
  } catch (err) {
    res.status(404)
    throw new Error("No card found with given id")
  }

  
  res.status(204).send();
});