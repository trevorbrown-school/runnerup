import axios from 'axios';
import WgerParams from 'types/WgerParams';



const params: WgerParams = {
    language: 2
}


export default axios.create({
    baseURL: "https://wger.de/api/v2/exercise/",
    params
})