const { model, Schema } = require("mongoose");

const ConversationListSchema = new Schema(
 
{  
    pongId: {
        type: Schema.Types.ObjectId,
        ref: "MonkeyPong",
    },
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    
    url: {
        type: String
    }

  },
  { timestamps: true }
);

module.exports = model("ConversationList", ConversationListSchema );
