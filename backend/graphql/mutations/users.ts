// ./graphql/mutations.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/prismaClient";
import { GraphQLError } from "graphql";

const JWT_SECRET = process.env.JWT_SECRET as string;

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
    const hashedPassword = await bcrypt.hash(password, 10);
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
  { username, password }: { username: string; password: string }
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
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    return {
      token,
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
