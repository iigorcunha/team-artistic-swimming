const Board = require("../models/Board");
const Card = require("../models/Card");
const asyncHandler = require("express-async-handler");
const BoardColumn = require("../models/BoardColumn");
const createBoardDocument = require("./utils/newBoard");

// @route POST /users
// @desc Search for users
// @access Private
exports.listOneBoard = asyncHandler(async (req, res, next) => {
  
  const board = await Board.findById(req.params.id).populate({
    path: 'columns',
    populate: {
      path: 'cards'
    }
  });

  if(!board) {
    res.status(404);
    throw new Error("No board found with given id");
  }
  
  res.status(200).json(board);
});

exports.listAllBoards = asyncHandler(async (req, res, next) => {
  
  const boards = await Board.find({ user: req.user.id });

  if(!boards) {
    res.status(404);
    throw new Error("There are no boards for this user");
  }
  
  res.status(200).json(boards);
});

exports.createBoard = asyncHandler(async (req, res, next) => {
  const { name } = req.body
  const userId = req.user.id
  
  const board = await createBoardDocument(name, userId);
  if(!board) {
    res.status(500);
    throw new Error("Could not create board, try again");
  }
  
  res.status(200).json(board);
});

exports.handleBoard = asyncHandler(async (req, res, next) => {
  const { columns } = req.body;

  // Map the list of columns to check if column already exists or not
  const columnsList = await Promise.all(columns.map(async column => {

    let columnUpdated = column;

    // Check which columns is already created
    const columnExists = await BoardColumns.findOne({_id: column._id})

    // If column does not exist create a new column.
    if (!columnExists) {
      columnUpdated = await BoardColumn.create({
        name: column.name,
      });
    } else {
      columnUpdated = columnExists;
    }

      // If cards are sent in column body do the process to find or create the cards.
      if (column.cards) {
        // Map to go through cards array
        const cardsList = await Promise.all(column.cards.map(async card => {
          // Check if cards array already exists
          const cardExists = await Card.findOne({_id: card._id})
  
          // If card no exist create a new one.
          if(!cardExists) {
            return Card.create({
              name: card.name,
              description: card.description
            })
          }
  
          return cardExists;
        }))
  
        columnUpdated = await BoardColumn.findOneAndUpdate({_id: columnUpdated._id}, {
      cards: cardsList
     })
    }

    return columnUpdated; 
  }))

  // After findOrCreate columns set them to the respective board.
  // The board is find by authentication.
  await Board.findOneAndUpdate({user: req.user.id}, {
    columns: columnsList
  })

  const updatedBoard = await Board.findOne({ user: req.user.id }).populate({
    path: 'columns',
    populate: {
      path: 'cards'
    }
  });

  res.status(200).json({ board: updatedBoard })
})


exports.deleteColumn = asyncHandler(async (req, res, next) => {
  const { column } = req.body;

  if (column.cards) {
    await Promise.all(column.cards.map(async card => {
      await Card.deleteOne({_id: card._id});
    }))
  }

  const deletedColumn = await BoardColumn.deleteOne({ _id: column._id })

  if(deletedColumn.deletedCount === 0){
    res.status(404);
    throw new Error("Column can't be deleted with given id");
  }

  res.status(204).send()
})

exports.deleteCard = asyncHandler(async (req, res, next) => {
  const { card } = req.body;

  
    const deletedCard = await Card.deleteOne({ _id: card._id })
    if(deletedCard.deletedCount === 0){
      res.status(404);
      throw new Error("Card can't be deleted with given id");
    }

    res.status(204).send()
})