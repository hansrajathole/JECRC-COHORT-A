import mongoose from "mongoose";

const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/jecrc-cohort-a")
    .then(()=>{
        console.log("database connected");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}


export default connect