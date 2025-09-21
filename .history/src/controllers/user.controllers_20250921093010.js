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
    const registeredUser = await User.findOne({
        $or: [{ email }, { username }]
    });
    console.log("registeredUser", registeredUser);//if not found return null
    if (registeredUser) {
        throw new ApiError(400, "User already exists");
    }
    console.log("req.files", req.files);// req.files will contain uploaded avatar/coverImage files, or undefined if none uploaded
    console.log(`req.files?.avatar[0]; ` + req.files?.avatar[0]);// req.files?.avatar[0] will contain the first uploaded avatar file, or undefined if none uploaded
    const avatarLocalPath = req.files?.avatar[0]?.path;
    console.log(`req.files?.coverImages[0]; ` + req.files?.coverImages[0]?.path);// req.files?.coverImages[0] will contain the first uploaded coverImage file, or undefined if none uploaded
    const coverImageLocalPath = req.files?.coverImages[0]?.path;
})


export { registerUserController };
