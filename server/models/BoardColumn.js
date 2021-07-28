const mongoose = require("mongoose");


const boardColumnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'card'
  }],
});

module.exports = BoardColumns = mongoose.model("boardColumn", boardColumnSchema);