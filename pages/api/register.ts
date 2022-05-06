import { users } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

class response {
  status: string = "";
  title: string = "";
  message: string = "";
  data: any = null;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const responseData = new response();

    if (req.method === "POST") {
      const reqBody: users = req.body;
      reqBody.active = false;
      const userUpsert: any = reqBody;
      const userId = reqBody;
      delete userUpsert.id;
      console.log(1);

      const checkUser = await prisma.users.findFirst({
        where: {
          username: reqBody.username,
        },
      });

      if (checkUser) {
        console.log(2);

        responseData.status = "error";
        responseData.title = "Lỗi";
        responseData.message = "Tài khoản đã tồn tại";
        responseData.data = null;
        res.json({
          status: responseData.status,
          title: responseData.title,
          message: responseData.message,
          data: responseData.data,
        });
      }

      if (checkUser === null) {
        console.log(3);

        bcrypt.hash(req.body.password, 12, async (err: any, hash: any) => {
          if (err) {
            console.log(4);
            console.log(err);

            responseData.status = "error";
            responseData.title = "Đăng ký thất bại";
            responseData.message = "Lỗi hệ thống";
            res.json({
              status: responseData.status,
              title: responseData.title,
              message: responseData.message,
              data: responseData.data,
            });
          } else {
            console.log(5, hash);

            userUpsert.password = hash;
            const result = await prisma.users.create({
              data: userUpsert,
            });
            if (result) {
              console.log(6);
              responseData.status = "success";
              responseData.title = "Đăng ký thành công";
              responseData.message = "Đăng ký thành công";
              res.json({
                status: responseData.status,
                title: responseData.title,
                message: responseData.message,
                data: responseData.data,
              });
            } else {
              console.log(7);
              responseData.status = "error";
              responseData.title = "Đăng ký thất bại";
              responseData.message = "Lỗi hệ thống";
              res.json({
                status: responseData.status,
                title: responseData.title,
                message: responseData.message,
                data: responseData.data,
              });
            }
          }
        });
      }
    }
  } catch (error) {
    console.log(9);
    console.log(error);
    res.json(null);
  }
}
