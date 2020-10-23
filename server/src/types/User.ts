interface iUser {
    _id: number;
    firstName: string;
    lastName: string;
    workouts?: number[];
}

export default iUser;