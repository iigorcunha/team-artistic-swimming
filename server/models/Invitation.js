const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  email: {
    type: String,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team'
  },
});

module.exports = Invitation = mongoose.model("invitation", invitationSchema);