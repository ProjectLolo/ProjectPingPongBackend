const { AuthenticationError, UserInputError } = require("apollo-server");
const MonkeyPong = require("../../../models/MonkeyPong");
const checkAuth = require("../../../utils/check-auth");
const ConversationList = require("../../../models/ConversationList");

const createConversationList = async (
  _,
  { recipientId, url, pongId },
  context
) => {
  const user = checkAuth(context);

  try {
    const monkeyPong = await MonkeyPong.find({ _id: pongId });
    console.log(monkeyPong);
    const conversationList = new ConversationList({
      pongId,
      url,
      senderId: user.userId,
      recipientId,
    });
    console.log(conversationList);

    const result = await conversationList.save();

    return { ...result._doc };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createConversationList,
};
