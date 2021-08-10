const Card = require("../models/Card");
const asyncHandler = require("express-async-handler");
const BoardColumn = require("../models/BoardColumn");

exports.deleteColumn = asyncHandler(async (req, res, next) => {
  const { _id } = req.params;

 try {
  const boardColumn = await BoardColumn.findOne({ _id }).populate('cards')

  
    if (boardColumn.cards) {
      await Promise.all(boardColumn.cards.map(async card => {
        await Card.deleteOne({_id: card._id});
      }))
    }
  
    await BoardColumn.deleteOne({ _id })

    res.status(204).send()
 } catch {
  res.status(404);
  throw new Error("Column can't be deleted with given id");
 }

  
})