import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profile : {
        type : String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStltpfa69E9JTQOf5ZcyLGR8meBbxMFJxM0w&s"
    }
})

const userModel = mongoose.model("user", userSchema)
export default userModel