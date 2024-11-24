import { register, login, refreshToken } from "../graphql/mutations/auth";
import { likeCat, newMatch } from "../graphql/mutations/like";
import prisma from "../prisma/prisma";

const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
    user: (_parent, args) =>
      prisma.user.findUnique({ where: { id: Number(args.id) } }),
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

export default resolvers;
