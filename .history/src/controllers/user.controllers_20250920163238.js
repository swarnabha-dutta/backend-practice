import { asyncHandler } from "../utils/asyncHandler.js";


const registerUserController = asyncHandler(async (req, res) => {
    const { username, email, fullName, password } = req.body;
    console.log(object)
})


export { registerUserController };
