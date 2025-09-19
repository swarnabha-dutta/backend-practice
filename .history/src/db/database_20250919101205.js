import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.PORT}/${DB_NAME}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}