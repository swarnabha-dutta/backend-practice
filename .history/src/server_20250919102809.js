import dotenv from "dotenv";
import mongoose from "mongoose";    
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv.config(); from "./db/database.js";

dotenv.config({
    path:"./env",
});


connectDB();
