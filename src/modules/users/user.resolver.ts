import { getRepository } from "typeorm"
import { User } from "../../entities/User"

export const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    // this is the user resolver
    user: (_, { id }) => {
      return getRepository(User).findOne(id)
    },
  },
  Mutation: {
    // this is the addUser resolver
    addUser: (_, { name, email }) => {
      const user = new User()
      user.email = email
      user.name = name
      return getRepository(User).save(user)
    },
  },
}