import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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


    console.log(`req.files: ${JSON.stringify(req.files)}`);
    const avatarLocalPath = req.files?.avatar[0]?.path;

    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required");
    }


    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar) {
        throw new ApiError(400, "Avatar is required");
    }
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);


    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    });


    const findCreatedUser = User.findById(user._id).select("-password -refreshToken");

    if (!findCreatedUser) {
        throw new ApiError(500, "User not created");
    }


    return new ApiResponse(200, findCreatedUser, "User created successfully");
})


export { registerUserController };
