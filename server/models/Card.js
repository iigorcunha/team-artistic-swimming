const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  colorCode: {
    type: String,
    enum: ["red", "green", "blue", "yellow", null]
  }
}, {
  timestamps: true
});

module.exports = BoardColumns = mongoose.model("card", cardSchema);