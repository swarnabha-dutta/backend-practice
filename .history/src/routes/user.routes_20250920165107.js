import { Router } from "express";   
import {registerUserController} from "../controllers/user.controllers.js";
import {}


const router = Router();


router.route(`/register`).post(registerUserController);

export default router;