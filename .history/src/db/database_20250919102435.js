import mongoose from "mongoose";
import { DB_NAME } from "../../src";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB is connected on ${process.env.PORT}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}



export default connectDB;