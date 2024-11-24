import { PrismaClient } from "@prisma/client";
import { PubSub } from "graphql-subscriptions";

const prisma = new PrismaClient();
const pubsub = new PubSub();

export const likeCat = async (_parent: unknown, args: any, context: any) => {
  const userId = context.user.userId;
  const { catId } = args;

  // Salva il like nel database
  const like = await prisma.like.create({
    data: {
      userId,
      catId,
    },
  });

  // Controlla se il gatto ha già messo like all'utente per creare un match
  const match = await prisma.like.findFirst({
    where: {
      userId: catId,
      catId: userId,
    },
  });

  if (match) {
    const matchData = { userId, catId };
    // Pubblica un evento di subscription
    pubsub.publish(`NEW_MATCH_${userId}`, { newMatch: matchData });
    pubsub.publish(`NEW_MATCH_${catId}`, { newMatch: matchData });
  }

  return like;
};

export const newMatch = {
  subscribe: (_parent: unknown, args: any) =>
    pubsub.asyncIterator(`NEW_MATCH_${args.userId}`),
};
