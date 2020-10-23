import mongoose from 'mongoose';
import User from '../models/User';
import userSchema from '../schemas/User';
import iUser from '../types/User';
const dbname = "runnerup";
mongoose.connect(`mongodb+srv://TrevorBrownDev:${process.env.MONGO_PASSWORD}@runnerup.u6ym7.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });



export const requestUser = async (_id: number) => {
    await User.findOne({ _id }, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        return res;
    })    
}




export const postUser = async (params: iUser, callback: ((arg0: mongoose.Document) => void)) => {
    // const user = new User({ ...params });
    User.findById(params._id, (err, res) => {
        if (!res || err) {
            //user not found make a new one
            console.log("User not found!");
            const user = new User({ ...params });
            user.save().then(user => {
                if (user)
                    callback(user);
            });
            
        } else {
            console.log(res);
            callback(res);
        }

    })    
}

export const updateUser = async (_id: string, workouts: number[], callback: ((arg0: mongoose.Document | null) => void)) => {
    console.log(workouts);
    const user = await User.findById(_id, (err, res) => {
        if (err) {
            console.log("User not found!")
            return;
        }
        res?.set('workouts', workouts);
        res?.save();
        if(res) callback(res);

    })
}



