import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.PORT}/${DB_NAME}`);
        console.log(`MONGODB is connected on `);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}