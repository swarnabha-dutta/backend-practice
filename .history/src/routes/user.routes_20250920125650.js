import { Router } from "express";   
import regist{erUserController from "../controllers/user.controllers.js";
const router = Router();


router.route("/register").post(registerUserController);

export default router;