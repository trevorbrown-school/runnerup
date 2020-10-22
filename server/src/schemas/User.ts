import { Schema } from "mongoose";

const userSchema = new Schema({
    _id: {type: Number, required: true },
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    workouts: {type: [Number], default: []}
});

export default userSchema;