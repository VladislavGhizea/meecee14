// pages/api/addUser.ts
import { addUser } from "../../backend/server";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = req.body;
    await addUser(user);
    res.status(200).json({ message: "User added" });
  } else {
    res.status(405).end();
  }
}
