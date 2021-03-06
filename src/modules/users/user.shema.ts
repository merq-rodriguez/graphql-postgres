export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    hello(name: String): String!
    user(id: ID!): User!
  }
  type Mutation {
    addUser(name: String!, email: String!): User
  }
`;