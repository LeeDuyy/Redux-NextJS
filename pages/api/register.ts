import { users } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

class response {
    status: string = '';
    title: string = '';
    message: string = '';
    data: any = null; 
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
 ;
    try {
        const responseData = new response();
        
        if (req.method === 'POST') {
            const reqBody: users = req.body;
            reqBody.active = false;
            const userUpsert: any = reqBody;
            delete userUpsert.id;
            
           
            const checkUser = await prisma.users.findFirst({
                where: {
                    username: reqBody.username,
                }
            });

            if (checkUser) {
                responseData.status = 'error';
                responseData.title = 'Lỗi';
                responseData.message = 'Tài khoản đã tồn tại';
                responseData.data = null;
                
            }
            if(checkUser === null) {
                await prisma.users.create({
                    data: userUpsert
                });
                
                responseData.status = 'success';
                responseData.title = 'Thành công';
                responseData.message = 'Đăng ký thành công';
            }
           
        }
        
        res.json({status: responseData.status, title: responseData.title, message: responseData.message, data: responseData.data});
        
    } catch (error) {
        console.log(error);
        res.json(null);
    }
}
