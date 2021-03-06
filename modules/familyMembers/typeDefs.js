const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    familyMembers: [FamilyMember!]!
  }

  extend type Mutation {
    addMember(
      kidId: String!
      relation: String!
      notification: String!
    ): FamilyMember!
    deleteMember(_id: String!): String
  }

  type FamilyMember {
    _id: ID!
    userId: User
    relation: String!
    notification: String!
    kid: Kid!
  }

  input MemberInput {
    kidId: String!
    relation: String!
    notification: String!
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
