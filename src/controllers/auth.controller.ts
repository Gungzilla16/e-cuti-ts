import {Request, Response} from 'express';
import bcrypt  from 'bcrypt';
import jwt from "jsonwebtoken";
import { User } from '../models';

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "User tidak ditemukan"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Password salah"});
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        res.json({
            message: 'Login berhasil',
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan server", error });
    }
    
};