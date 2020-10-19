import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 5000;
import workouts from './routes/workouts';
const app = express();
app.use(cors());
app.use(workouts);





app.listen(PORT, () => {
    const d = new Date(Date.now());
    console.log(`[${d.toLocaleDateString()}|${d.toLocaleTimeString()}] Server listening on https://localhost:${PORT}`);
});