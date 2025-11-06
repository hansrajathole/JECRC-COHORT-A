import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"

const protectedRoute = async (req, res, next) => {
    try {

       const token = req.headers?.authorization?.split(" ")[1]
        
       if(!token){
        return res.status(401).json({message : "unauthorized user"})
       }

       const decode = jwt.verify(token, "secret-key" )


    //   const decode =  {
    //     id : 87965203465,
    //     username : "dev" ,
    //     email : "dev@gmail.com"
    //    }

    const user = await userModel.findById(decode.id)

    if(!user){
        return res.status(401).json({message : "unauthorized user"})
    }

    req.userId = user._id

    next()

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message : "internal server error" , error : error.message})
    }
}


export default protectedRoute