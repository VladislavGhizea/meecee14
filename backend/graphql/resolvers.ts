import prisma from "../prisma/prismaClient";
import { GraphQLJSON } from "graphql-type-json";
import { signup, login } from "./mutations";

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    users: async () => await prisma.user.findMany(),
    descriptions: async () => await prisma.description.findMany(),
    cats: async () => await prisma.cat.findMany(),
    matches: async () => await prisma.match.findMany(),
    interactions: async () => await prisma.interaction.findMany(),
  },
  Mutation: {
    signup,
    login,
  },
};

export default resolvers;
