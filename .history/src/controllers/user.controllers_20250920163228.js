import { asyncHandler } from "../utils/asyncHandler.js";


const registerUserController = asyncHandler(async (req, res) => {
    const { username, email, fullName, passwprd } = req.body;
})


export { registerUserController };
