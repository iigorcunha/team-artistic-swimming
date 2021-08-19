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
  attachments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'attachment'
  }],
  checklists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'checklist'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }],
}, {
  timestamps: true
});

module.exports = Card = mongoose.model("card", cardSchema);
