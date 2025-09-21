import { Router } from "express";   
import {registerUserController} from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"


const router = Router();


router.route(`/register`).post(
    upload.fields([
        {
            
        },{}
    ]),
    registerUserController);

export default router;