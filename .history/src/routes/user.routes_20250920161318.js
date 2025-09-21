import { Router } from "express";   
import {userController} from "../controllers/user.controllers.js";
const router = Router();


router.route("/register").post(userController);

export default router;