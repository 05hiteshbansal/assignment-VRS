import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    location:{
        type:String,
        required:[true,"please Provide a Location"],
    },
    userPhoto:{
        type:String,
        
    }
    
})


const UserProfile= mongoose.models.userProfile ||  mongoose.model("userProfile",userProfileSchema)



export default UserProfile