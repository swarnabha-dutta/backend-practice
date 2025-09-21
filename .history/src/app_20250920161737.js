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
import userRoutes from "../src/routes/user.routes";





//routes declaration
app.use(`/api/v2/users`, userRoutes);

// http://localhost:8000/api/v2/api/users/register
export { app };