const Board = require("../../models/Board");
const BoardColumn = require("../../models/BoardColumn");
const User = require("../../models/User");

const createBoardDocument = async (name, userId) => {
    const user = await User.findById(userId)
    if (user) {
        const columns = await BoardColumn.insertMany([{
            name: 'in progress'
          }, {
            name: 'completed'
          }])
        
         const newBoard = await Board.create({
            user: userId,
            name: name,
            columns
        })

        user.boards.push(newBoard)
        user.save()
    }
}

module.exports = createBoardDocument;