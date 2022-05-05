import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            const { username, password } = req.body;
            const result = await prisma.users.findFirst({
                where: {
                    username: username,
                    password: password
                }
            });
            console.log(result);
            
            if (result) {
                res.json({
                    status: 'success',
                    data: result,
                    title: 'Đăng nhập thành công',
                    message: 'Đăng nhập thành công',
                });
            } else {
                res.json({
                    status: 'error',
                    title: 'Đăng nhập thất bại',
                    message: 'Sai tài khoản hoặc mật khẩu',
                });
            }
        }
       
    } catch (error) {
        res.json(null);
    }
}
