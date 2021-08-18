const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastViewed: {
    type: Boolean,
    default: true
  },
  columns: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'boardColumn'
  }],
});

module.exports = Board = mongoose.model("board", boardSchema);
