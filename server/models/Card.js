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
  },
  tags: {
    type: [String]
  },
  attachments: {
    type: [String]
  }
}, {
  timestamps: true
});

module.exports = BoardColumns = mongoose.model("card", cardSchema);