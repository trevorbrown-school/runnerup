import mongoose from 'mongoose';
import userSchema from '../schemas/User';
const dbname = "runnerup";
mongoose.connect(`mongodb+srv://TrevorBrownDev:${process.env.MONGO_PASSWORD}@runnerup.u6ym7.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', userSchema);


const requestUser = async (_id: number) => {
    let user;
    await User.findOne({ _id }, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        user = res;
    })

    if(user)
        return user;
    else throw new Error("User not found!");
    
}

export default requestUser;


