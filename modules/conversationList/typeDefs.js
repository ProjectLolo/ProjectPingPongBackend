const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  extend type Query {
    findConversationList(userId: ID!): [ConversationList]
  }

  extend type Mutation {
    createConversationList(
      pongId: String!
      userId: String!
      url: String!
    ): ConversationList!
  }

  type ConversationList {
    _id: ID
    pongId: MonkeyPong
    userId: ID
    url: String
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
