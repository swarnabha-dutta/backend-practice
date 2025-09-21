import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.models.js";

const registerUserController = asyncHandler(async (req, res) => {
    const { username, email, fullName, password } = req.body;
    console.log(req.body);
    if (fullName === "") {
        throw new ApiError(400, "Full name is required");
    }
    if (username === "") {
        throw new ApiError(400, "Username is required");
    }
    if (email === "") {
        throw new ApiError(400, "Email is required");
    }
    if (password === "") {
        throw new ApiError(400, "Password is required");
    }

    // check the user is already present if yes then throw error
    const registeredUser = await User.findOne({})

})


export { registerUserController };
