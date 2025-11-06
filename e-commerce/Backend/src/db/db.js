import mongoose from "mongoose";
import config from "../config/config.js";

const connect = ()=>{
    mongoose.connect(config.MONGODB_URI)
    .then(()=>{
        console.log("database connected");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}


export default connect