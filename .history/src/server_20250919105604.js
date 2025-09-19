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
        const server = app.listen(process.env.PORT || 8000, () => {
            console.log(`MONGODB is now successfully  connected on ${process.env.PORT}`);
            console.log(`server is running on http://localhost:${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MONGODB connection error", error);
        process.exit(1);
})
