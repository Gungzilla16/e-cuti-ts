import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (_req, res) => {
    res.json({message: 'E-Cuti backend running 🚀' });
});

const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
    console.log('Serever running on port ${PORT}');
});