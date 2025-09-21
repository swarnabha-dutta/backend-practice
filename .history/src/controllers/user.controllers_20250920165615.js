import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";

const registerUserController = asyncHandler(async (req, res) => {
    const { username, email, fullName, password } = req.body;
    
    if (fullName === "") {
        throw new ApiError(400, "Full name is required");
    }
    if (username === "") {
        throw new ApiError(400, "Username is required");
    }
})


export { registerUserController };
