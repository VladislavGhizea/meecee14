import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import prisma from "./prisma/prismaClient";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

// Configura Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Avvia il server
const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => ({
      prisma,
      req,
    }),
  });
  console.log(`🚀 Server pronto su ${url}`);
};

startServer();
