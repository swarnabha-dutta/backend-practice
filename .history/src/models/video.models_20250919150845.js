import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    videoFile: {
        type:String,
        required:true,
    
    }
}, { timestamps: true });