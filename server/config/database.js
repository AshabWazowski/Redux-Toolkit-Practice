import mongoose from "mongoose";

const connectDB = async (MONGODB) =>{
    try{
        await mongoose.connect(MONGODB, {
            useNewURLParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDb is Connected");
    }catch(error){
        console.log('Error : ', error.message);
    }
}

export default connectDB;