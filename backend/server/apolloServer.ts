import { ApolloServer } from "apollo-server";
import typeDefs from "../graphql/schema";
import resolvers from "./resolvers";
import prisma from "../prisma/prisma";
import { getUser } from "./context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    const user = getUser(token);
    return { user, prisma };
  },
});

export default server;
