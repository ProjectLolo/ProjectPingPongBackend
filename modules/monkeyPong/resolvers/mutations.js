const {AuthenticationError, UserInputError} = require("apollo-server");
const MonkeyPong = require("../../../models/MonkeyPong");
const checkAuth = require("../../../utils/check-auth");
const ConversationList = require("../../../models/ConversationList");
const {PubSub} = require("apollo-server");
const pubsub = new PubSub();

const createMonkeyPong = async (
  _,
  {animal, kidId, url, recipientId},
  context
) => {
  const user = checkAuth(context);

  try {
    const monkeyPong = new MonkeyPong({
      animal,
      kidId,
      url,
      userId: user.userId,
    });
    console.log(monkeyPong);

    const conversationList = new ConversationList({
      pongId: monkeyPong._id,
      senderId: user.userId,
      recipientId,
    });
    console.log(conversationList);

    const list = await conversationList.save();
    const result = await monkeyPong.save();

    //! Todo
    // const conversationList = await ConversationList.find({
    //   senderId: user.userId
    // })
    // console.log(conversationList)

    // pubsub.publish("conversationList", {
    //   newConversation: "this the new conversation"
    // })

    return {...result._doc, list: list};
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createMonkeyPong,
};
