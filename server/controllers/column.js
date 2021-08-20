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

    res.status(200).send({ success: true })
 } catch {
  res.status(404);
  throw new Error("Column can't be deleted with given id");
 }

})


exports.editColumn = asyncHandler(async (req, res, next) => {

  const { _id } = req.params;

  const column = await BoardColumn.findById(_id);

  if (!column) {
    res.status(404)
  throw new Error("No column was found with given id")
  }

  const {
    name,
  } = req.body;

  // Created verification to avoid change data that was not supposed to be changed.
  if (column.name !== name || name !== (null || undefined)) {
    await BoardColumn.findOneAndUpdate({_id}, { name });
  };



  const updatedColumn = await BoardColumn.findById(_id);

  res.status(201).send({ column: updatedColumn})

});
