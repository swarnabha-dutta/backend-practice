import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    videoFile: {
        type:String,//cloudinary 
        required:true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });