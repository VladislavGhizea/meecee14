import prisma from "../../prisma/prisma";
interface UserArgs {
  username: string;
  email: string;
  password: string;
  nome: string;
  cognome: string;
  CF: string;
  indirizzo: string;
  CAP: number;
  citta: string;
}
export const user = async (_parent: unknown, args: UserArgs) => {
  const user = await prisma.user.findUnique({
    where: { username: args.username },
  });
  if (!user) throw new Error("Utente non trovato");
  return user;
};
interface CatArgs {
  id: number;
}
export const cat = async (_parent: unknown, args: CatArgs) => {
  const cat = await prisma.cat.findUnique({
    where: { id: args.id },
  });
  if (!cat) throw new Error("Gatto non trovato");
  return cat;
};
