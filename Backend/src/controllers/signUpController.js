import User from '../model/userModel.js'
import bcrypt from 'bcrypt'

export const signup = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({message:"email or password is required!"})
        }
        console.log(`email : ${email}, password : ${password}`)

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({message:"user is alredy existed with this email"})
        };
      
        const hashedpassword = await bcrypt.hash(password, 10);
        console.log("hashedpassword",hashedpassword);

        const newUser = User.create({
            email:email,
            password:hashedpassword
        });
        return res.status(200).json({
            success:true,
            message:"user created successful"
        })


    } catch (error) {
        console.log(error.message);
        return res.status(error.code).json({success:false, message:"user note created"})
        
    }
}