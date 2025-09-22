import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});








import mongoose from "mongoose";    
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/database.js";
import { app } from "./app.js";




connectDB()
    .then(() => {
        const server = app.listen(process.env.PORT || 8000, () => {
            console.log(`MONGODB is now successfully  connected on ${process.env.PORT}`);
            console.log(`server is running on http://localhost:${process.env.PORT}`);
        });
        server.on("error", (err) => {
            console.log(`error regarding server related:,${err.message}`);
            process.exit(1);
        })
    })
    .catch((error) => {
        console.log("MONGODB connection error", error);
        process.exit(1);
})
