import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUserController = asyncHandler(async (req, res) => {
    console.log("=== REGISTER USER DEBUG ===");

    const { username, email, fullName, password } = req.body;
    console.log("📝 Request body:", req.body);
    console.log("📁 Request files:", req.files);

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
    console.log("👤 Existing user check:", registeredUser);

    if (registeredUser) {
        throw new ApiError(400, "User already exists");
    }

    // Get avatar path (required)
    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    console.log("🖼️ Avatar local path:", avatarLocalPath);

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required");
    }

    // Get cover image path (optional)
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
    console.log("🎨 Cover image local path:", coverImageLocalPath);

    // Upload avatar (required)
    console.log("⬆️ Starting avatar upload...");
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log("🖼️ Avatar upload result:", avatar);

    if (!avatar) {
        throw new ApiError(400, "Avatar upload failed - please try again");
    }

    // Upload cover image (optional)
    let coverImage = null;
    if (coverImageLocalPath) {
        console.log("⬆️ Starting cover image upload...");
        coverImage = await uploadOnCloudinary(coverImageLocalPath);
        console.log("🎨 Cover image upload result:", coverImage);
    }

    console.log("💾 Creating user in database...");
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    });

    console.log("👤 User created with ID:", user._id);

    const findCreatedUser = await User.findById(user._id).select("-password -refreshToken");

    if (!findCreatedUser) {
        throw new ApiError(500, "User not created");
    }

    console.log("✅ User registration successful");
    console.log("=== END DEBUG ===");

    return res.status(200).json(
        new ApiResponse(200, findCreatedUser, "User created successfully")
    );
})

export { registerUserController };