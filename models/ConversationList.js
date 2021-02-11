const { model, Schema } = require("mongoose");

const ConversationListSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    recipientId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    pongId: {
      type: Schema.Types.ObjectId,
      ref: "MonkeyPong",
    }
  },
  { timestamps: true }
);

module.exports = model("ConversationList", ConversationListSchema);
