import userModel from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const registerController = async (req, res)=>{
    try {
      const {username , email , password } =  req.body

      if(!username){
         res.status(400).json({message : "username is required"})
      }
      if(!email){
         res.status(400).json({message : "email is required"})
      }
      if(!password){
         res.status(400).json({message : "password is required"})
      }
      


      const exist = await userModel.findOne({email})

      if(exist){
        res.status(400).json({message : "user is allready exist"})
      }

      const hashedPass = await bcrypt.hash(password , 10)


      console.log(hashedPass);
      

     const user = await userModel.create({
        username : username,
        email : email,
        password : hashedPass
      })

    
      res.status(201).json({message : "register successfully", user})
    
    
    } catch (error) {
       console.log(error.message);
       res.status(500).json({message : "internal server error", error : error.message })
        
    }
}

const getRegisterController = (req, res)=>{
   try {
      
      res.render("register.ejs")
   } catch (error) {
      
   }
}




const loginController = async (req, res)=>{
   const {email , password} = req.body

   if(!email){
      res.status(400).json({message : "email is required"})
   }
   if(!password){
      res.status(400).json({message : "password is required"})
   }

   const user = await userModel.findOne({email})

   if(!user){
      res.status(404).json({message : "user not register"})
   }

   const isMatch = await bcrypt.compare(password , user.password)

   if(!isMatch){
      res.status(400).json({message : "please enter valid email or password"})
   }

   delete user._doc.password

   const token = jwt.sign({
      id : user._id,
      username : user.username,
      email : user.email
   },"secret-key")

   res.status(200).json({message : "login successfully", token , user})

}


const meController = async (req, res)=>{

  const userId =  req.params.userId

  const user = await userModel.findById(userId)

  if(!user){
    res.status(404).json({message : "user not found"})
  }

  delete user._doc.password


  res.status(200).json({message : "user data found" , user})

}


export {
    registerController,
    loginController,
    meController,
    getRegisterController
}