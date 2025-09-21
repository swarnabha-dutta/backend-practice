import { asyncHandler } from "../utils/asyncHandler.js";
import {Ap}

const registerUserController = asyncHandler(async (req, res) => {
    const { username, email, fullName, password } = req.body;
    console.log(username, email, fullName, password);
})


export { registerUserController };
