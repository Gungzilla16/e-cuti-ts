import express from 'express';
import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/login', login);

router.get('/profile', verifyToken, (req: any, res) => {
    res.json({
        message: "Profile dapat diakses",
        user: req.user
    })
});

export default router;