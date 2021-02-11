
const { PubSub } = require('apollo-server');
const pubsub = new PubSub()

const newConversation = {
    subscribe: () => pubsub.asyncIterator("conversationList")

}

module.exports = { newConversation };

