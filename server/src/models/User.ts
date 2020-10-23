import mongoose from 'mongoose';
import userSchema from '../schemas/User';
const User = mongoose.model('User', userSchema);

export default User;