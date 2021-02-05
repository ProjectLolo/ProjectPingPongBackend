const ConversationList = require("../../../models/ConversationList");
const checkAuth = require("../../../utils/check-auth");

const findConversationList = async (_, { userId }, context) => {
  try {
    const { userId } = checkAuth(context);

    const conversationListSender = await ConversationList.find({
      senderId: userId,
    }).populate("pongId");

    const conversationListRecipient = await ConversationList.find({
      recipientId: userId,
    }).populate("pongId");

    return [...conversationListSender, ...conversationListRecipient];
  } catch (err) {
    throw err;
  }
};

module.exports = { findConversationList };
