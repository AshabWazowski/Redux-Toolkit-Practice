import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    text:{
        type: String,
        required:true,
    },
    userId:{
        type: String,
    }
})

const Data = mongoose.model('data', DataSchema);

export default Data;