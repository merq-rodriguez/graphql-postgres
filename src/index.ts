import { GraphQLServer } from 'graphql-yoga'
import { createConnection } from 'typeorm';
import { typeDefs } from './modules/users/user.shema'
import { resolvers } from './modules/users/user.resolver'

const server = new GraphQLServer({ typeDefs, resolvers })
createConnection()
  .then(() => {
    server.start(() => console.log("Server is running on localhost:4000"));
  }).catch(() => {
  console.log("Couldn't connect to the database.")
});