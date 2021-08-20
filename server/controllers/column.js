const Card = require("../models/Card");
const asyncHandler = require("express-async-handler");
const BoardColumn = require("../models/BoardColumn");

exports.deleteColumn = asyncHandler(async (req, res, next) => {
  const { _id } = req.params;

  const boardColumn = await BoardColumn.deleteOne({ _id })

  if (boardColumn.deletedCount === 0) {
    res.status(404);
    throw new Error("Column can't be deleted with given id");
  }

  res.status(204).send()

})
