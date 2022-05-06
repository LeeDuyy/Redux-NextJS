import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const reqBody: any = req.body;

      const checkUser = await prisma.users.findFirst({
        where: {
          username: reqBody.username,
        },
      });
      if (checkUser) {
        bcrypt.compare(
          reqBody.password,
          checkUser.password,
          (err: any, isMatch: any) => {
            if (err) {
              console.log(err);
            }
            if (isMatch) {
              res.json({
                status: "success",
                title: "Đăng nhập thành công",
                message: "Đăng nhập thành công",
              });
            } else {
              res.json({
                status: "error",
                title: "Đăng nhập thất bại",
                message: "Sai tài khoản hoặc mật khẩu",
              });
            }
          }
        );
      } else {
        res.json({
          status: "error",
          title: "Đăng nhập thất bại",
          message: "Sai tài khoản hoặc mật khẩu",
        });
      }
      console.log(checkUser);
    }
  } catch (error) {
    console.log(4);

    res.json(null);
  }
}
