import userModel from "../models/user.model.js"

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


     const user = await userModel.create({
        username : username,
        email : email,
        password : password
      })

    
      res.status(201).json({message : "register successfully", user})
    
    
    } catch (error) {
       console.log(error.message);
       res.status(500).json({message : "internal server error", error : error.message })
        
    }
}






const loginController = (req, res)=>{

}



export {
    registerController,
    loginController
}