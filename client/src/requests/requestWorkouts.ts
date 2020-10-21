import wger from '../api/wger';
import WgerParams from "types/WgerParams";



const getWorkouts = async (params: WgerParams) => {
    const response = await wger.get('/', { params });

    return response.data.results;
}

export default getWorkouts;