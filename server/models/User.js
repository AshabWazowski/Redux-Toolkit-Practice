import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true,
        min: 4, 
        max: 50,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})

const User = mongoose.model('user', UserSchema);

export default User;