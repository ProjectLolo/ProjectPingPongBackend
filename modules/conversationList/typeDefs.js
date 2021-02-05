const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`


  extend type Mutation {
    createConversationList(
    
    pongId: String!
    userId: String!
    url: String!

    ): ConversationList!
  }

  type ConversationList {
       _id: ID!
       pongId: ID!
       userId: ID!
       url: String!
       pong: MonkeyPong
  }
`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};

