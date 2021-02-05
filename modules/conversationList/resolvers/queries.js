const ConversationList = require("../../../models/ConversationList");
const checkAuth = require("../../../utils/check-auth");

const findConversationList = async (_, { userId }, context) => {
  try {
    const { userId } = checkAuth(context);
    const conversationList = await ConversationList.find({
      userId: userId,
    }).populate("pongId");
    console.log(conversationList);
    return conversationList;
  } catch (err) {
    throw err;
  }
};

module.exports = { findConversationList };
