import Data from "../models/Data.js";

export const addData = async (req, res) =>{
    const {userId , title, text} = req.body;

    try{
        const newData = new Data({
            userId,
            title,
            text,
        });

        newData.save();
        res.status(201).json({message:"note added Successfully"})

    }catch(error){
        console.log("Error Message :", error.message);
        res.status(404).json({message: error.message});
    }

}

export const getData = async (req, res)=>{
    // send Id in the route:{"./:userId/data"}
    const {userId} = req.params;
       
    try{
        const dataById = await Data.find({userId});
        res.status(200).json(dataById);                
    }catch(error){
        res.status(401).json({message: error.message});
    }
}

