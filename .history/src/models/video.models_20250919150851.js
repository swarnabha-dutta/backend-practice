import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    videoFile: {
        type:String,//c
        required:true,
    }
}, { timestamps: true });