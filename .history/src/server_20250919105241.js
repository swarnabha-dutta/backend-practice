import dotenv from "dotenv";
import mongoose from "mongoose";    
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/database.js";
import { app } from "./app.js";

dotenv.config({
    path:"./.env",
});


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            
        })
    })
    .catch((error) => {
        console.log("MONGODB connection error", error);
        process.exit(1);
})
