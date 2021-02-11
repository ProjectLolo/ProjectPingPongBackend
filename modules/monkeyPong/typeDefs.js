const { gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`

  extend type Subscription {
    newConversation: String!
  }

  extend type Query {
    monkeyPongs(kidId: ID): [MonkeyPong!]!
    findMonkeyPongs(kidId: ID): [MonkeyPong!]!
    monkeyPongById(_id: ID, kidId: ID): MonkeyPong!
  }

  extend type Mutation {
    createMonkeyPong(
      animal: String!
      kidId: ID,
      url: String!,
      recipientId: String 
      ): MonkeyPong!
  }

  type MonkeyPong {
    _id: ID!
    animal: String!
    kidId: ID!
    url: String!
    userId: User!
    list: ConversationList!
  }

`;

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};

