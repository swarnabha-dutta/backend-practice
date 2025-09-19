import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,   
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    fullName: {
        type:String,
        required:true,
    },
    
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
            required: true,
        }
    ],
    avatar: {
        type: String,
        required:true,
    },
    refreshToken: {
        type: String,
        required:true,
    }
}, { timestamps: true });