require('dotenv').config();
import express from 'express';
import cors from 'cors';
import users from './routes/users';
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', users);





app.listen(PORT, () => {
    const d = new Date(Date.now());
    console.log(`[${d.toLocaleDateString()}|${d.toLocaleTimeString()}] Server listening on https://localhost:${PORT}`);
});