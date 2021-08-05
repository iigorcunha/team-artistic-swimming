const Card = require("../models/Card");
const asyncHandler = require("express-async-handler");

// @route POST /users
// @desc Search for users
// @access Private
exports.editCard = asyncHandler(async (req, res, next) => {

  const { _id } = req.params;

  const {
    name,
    description,
    colorCode,
    deadline,
    tags,
    attachments
  } = req.body;

  try {
    await Card.findOneAndUpdate({_id}, {
      name,
      description,
      colorCode,
      deadline,
      tags,
      attachments
    });
  } catch (err) {
    res.status(404)
    throw new Error("No card found with given id")
  }

  
  res.status(204).send();
});


exports.deleteCard = asyncHandler(async (req, res, next) => {
  const { _id } = req.params;

  
    const card = await Card.findOneAndDelete({ _id })

    if (!card) {
      res.status(404);
    throw new Error("Card can't be deleted with given id");
    } else {
      res.status(204).send()
    }
})