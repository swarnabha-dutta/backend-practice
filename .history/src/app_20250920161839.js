import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";



const app = express();

app.use(cors({
    origin: `${process.env.CORS_ORIGIN}`,
    credentials: true
}));

app.use(express.json({limit:"21kb"}));
app.use(express.urlencoded({extended:true,limit:"21kb"}))
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import userRoutes from "../src/routes/user.routes.js";


//routes declaration
app.use(`/api/v1/users`, userRoutes);

// http://localhost:8000/api/v1/api/users/register
export { app };