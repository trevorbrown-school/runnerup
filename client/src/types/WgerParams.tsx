import Equipment from "./Equipment";



interface WgerParams {
    language?: number;
    muscles?: number;
    equipment?: Equipment;
    limit?: number;
    offset?: number;
}

export default WgerParams;