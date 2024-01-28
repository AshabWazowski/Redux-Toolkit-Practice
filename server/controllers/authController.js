import User from "../models/User.js";

export const register = async (req, res) =>{
    const {email, fullName, password } = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User exist with this email"})
        }

        const newUser = new User({
            fullName, 
            email, 
            password,
        })

        newUser.save();
        res.status(200).json({message: 'User Registered successfully'});

    }catch(err){
        console.log("Error Message :", err.message);
    }
}


export const login = async (req, res) =>{
  const {email, password} = req.body;
  console.log(email, password);
  try{
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message: 'User does not exist.'});
    }

 if(password !== user.password){
    return res.status(400).json({message:"Invalid Password"});
 }
   res.status(200).json(user);

  }catch(error){
    console.log(error.message);
    return res.status(400).json({message:error.message});
  }

}