import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";

const registerUserController = asyncHandler(async (req, res) => {
    const { username, email, fullName, password } = req.body;
    
    if(full)
})


export { registerUserController };
