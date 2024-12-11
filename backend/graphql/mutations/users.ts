import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/prismaClient";
import { GraphQLError } from "graphql";
import { Response } from "express";
const JWT_SECRET = process.env.JWT_SECRET as string;

const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

const generateToken = (user: {
  id: string;
  username: string;
  role: string;
}): string => {
  return jwt.sign(
    {
      userId: user.id,
      username: user.username,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
};

export const signup = async (
  _: unknown,
  {
    role,
    username,
    password,
    email,
    firstName,
    lastName,
    fiscalCode,
    address,
    postalCode,
    city,
  }: {
    role: "user" | "owner";
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    fiscalCode: string;
    address: string;
    postalCode: string;
    city: string;
  }
) => {
  try {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        role,
        username,
        password: hashedPassword,
        email,
        firstName,
        lastName,
        fiscalCode,
        address,
        postalCode,
        city,
      },
    });
    return user;
  } catch (error) {
    throw new GraphQLError("Error creating user", { extensions: { error } });
  }
};

export const login = async (
  _: unknown,
  { username, password }: { username: string; password: string },
  { res }: { res: Response }
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new GraphQLError("User not found");
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new GraphQLError("Invalid password");
    }
    const token = generateToken(user);

    // Imposta il token come cookie HTTP-only
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 giorno
    });

    return {
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };
  } catch (error) {
    throw new GraphQLError("Error logging in", { extensions: { error } });
  }
};
export const logout = async (
  _: unknown,
  __: unknown,
  { res }: { res: Response }
) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return { message: "Logout successful" };
  } catch (error) {
    throw new GraphQLError("Error logging out", { extensions: { error } });
  }
};
