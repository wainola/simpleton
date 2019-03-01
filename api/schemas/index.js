const { gql } = require('apollo-server-express');

const userSchema = gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
  }
  type User {
    username: String!
  }
`;

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchema, userSchema];
