import { asyncHandler } from "../utils/asyncHandler.js";


const user = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: ok,
    });
})


export { user };
