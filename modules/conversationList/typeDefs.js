const {gql} = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Query {
    findConversationList: [ConversationList]
  }

  extend type Mutation {
    createConversationList(
      pongId: String!
      recipientId: String!
      url: String!
    ): ConversationList!
  }

  type ConversationList {
    _id: ID
    pongId: MonkeyPong
    senderId: ID
    recipientId: ID
    url: String
    createdAt: String
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
