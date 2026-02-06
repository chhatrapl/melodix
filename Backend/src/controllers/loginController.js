import User from "../model/userModel.js";
import bcrypt from "bcrypt";


export const logIn = async (req, res)=>{


  try {


      const {email, password} = req.body;
  
        if(!email || !password){
              return res.status(400).json({message:"email or password is required!"})
          }
         
  
         const user = await User.findOne({email});
  
      if(!user){
          return res.status(404).json({message:"User not Found!"})
      };
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
      if(!isPasswordCorrect){
            return res.status(401).json({message:"inter correct password!"})
      }


      return res.status(200).json({success:true, message:"logedIn successfull."})



  } catch (error) {
     console.log(error.message);
    return res.status(500).json({success:false, message:"somthing went wrong!"})
  }

}