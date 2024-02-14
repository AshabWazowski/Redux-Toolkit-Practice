import Data from "../models/Data.js";

// Adding the data to database
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

// Fetching all the data based on the User ID
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

// Fetching the data based on the data id to use in the update page 
export const editData = async (req, res)=>{
    try{
        const id = req.params.id;
        const editData = await Data.findById(id);

    if(!editData){
        return res.status(400).json({message: "Data not Found"})
    }

    return res.status(200).json(editData);

    }catch(error){
        console.log("Edit Error", error.message);
    }
}

// Updating the data based on  the id
export const updateData = async (req, res) =>{
    const id = req.params.id;
    const {title, text} = req.body;

    try{
        const updatedData = await Data.findByIdAndUpdate(id, {text, title}, {new: true})

        if(!updatedData){
            return res.status(400).json({message:"Data not found"})
        }

        return res.status(200).json({message:"Data Updated", data:updatedData})

    }catch(err){
        console.log("Update Error",err.message);
    }
}

// Deleting the data based on the id
export const deleteData = async (req, res) =>{
    try{
            const id = req.params.id;
            const deletedData = await Data.findByIdAndDelete(id);
            if(!deletedData){
                return res.status(400).json({message:"Data not found to delete"});
            }

            return res.status(200).json({message:"Delete Succcessful"});
    }catch(error){
        console.log(error.message);
    }
}