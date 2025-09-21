import { Router } from "express";   
import {us} from "../controllers/user.controllers.js";
const router = Router();


router.route("/register").post(us);

export default router;