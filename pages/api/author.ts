import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secret } from "../../config/secret";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let dataToken;
    if (req.method === "POST") {
      const reqHeaders: any = req.headers;
      const token = reqHeaders.authorization;

      dataToken = jwt.verify(token, secret, (err: any, decoded: any) => {
        if (err) {
          return "error token";
        } else {
          return decoded;
        }
      });
    }
    res.json(dataToken);
  } catch (error) {
    console.log(4);

    res.json(null);
  }
}
