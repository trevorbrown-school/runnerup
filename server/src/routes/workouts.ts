import { Router } from 'express';
import axios from 'axios';
const router = Router();


router.get('/workouts', async (req, res) => {
    const response = await axios.get('https://wger.de/api/v2/exercise/?language=2&limit=50');
    res.send(response.data.results);
}) 


export default router;