const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  columns: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'boardColumn'
  }],
});

module.exports = Board = mongoose.model("board", boardSchema);
