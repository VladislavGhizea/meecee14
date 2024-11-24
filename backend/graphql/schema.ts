import typeDefs from "./typeDefs";
import { register, login, refreshToken } from "./mutations/auth";
import { likeCat, newMatch } from "./mutations/like";
import { user } from "./queries/user";

const resolvers = {
  Query: {
    user,
  },
  Mutation: {
    register,
    login,
    refreshToken,
    likeCat,
  },
  Subscription: {
    newMatch,
  },
};

export { typeDefs, resolvers };
