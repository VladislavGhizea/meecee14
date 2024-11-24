import bcrypt from "bcrypt";
import prisma from "../../prisma/prisma";
import {
  generateToken,
  generateRefreshToken,
  getUser,
} from "../../server/context";

interface RegisterArgs {
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

interface LoginArgs {
  email: string;
  password: string;
}

interface RefreshTokenArgs {
  token: string;
}

export const register = async (_parent: unknown, args: RegisterArgs) => {
  const hashedPassword = await bcrypt.hash(args.password, 10);
  return prisma.user.create({
    data: {
      username: args.username,
      email: args.email,
      password: hashedPassword,
      nome: args.nome,
      cognome: args.cognome,
      CF: args.CF,
      indirizzo: args.indirizzo,
      CAP: args.CAP,
      citta: args.citta,
    },
  });
};

export const login = async (_parent: unknown, args: LoginArgs) => {
  const user = await prisma.user.findUnique({
    where: { email: args.email },
  });
  if (!user) throw new Error("Utente non trovato");
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) throw new Error("Password errata");
  const token: string = generateToken({
    id: user.username,
    email: user.email,
  });
  const refreshToken: string = generateRefreshToken({
    id: user.username,
    email: user.email,
  });
  return { token, refreshToken };
};

export const refreshToken = async (_: unknown, { token }: RefreshTokenArgs) => {
  const user = getUser(token);
  if (!user) {
    throw new Error("Invalid refresh token");
  }
  const newToken = generateToken({ id: user.id, email: user.email });
  const newRefreshToken = generateRefreshToken({
    id: user.username,
    email: user.email,
  });
  return { token: newToken, refreshToken: newRefreshToken };
};
