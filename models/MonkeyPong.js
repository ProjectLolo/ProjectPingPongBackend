const { model, Schema } = require("mongoose");

const MonkeyPongSchema = new Schema(
  
  {
    animal: {
      type: String,
      required: true,
    },
    
    kidId: {
      type: Schema.Types.ObjectId,
      ref: "Kid",
      required: true,
    },
    
    url: {
      type: String,
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }

);

module.exports = model("MonkeyPong", MonkeyPongSchema);
