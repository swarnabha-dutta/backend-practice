import multer from "multer";

const storage = multer.diskStorage({
    destination: "./public/temp",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
export const upload = multer({ storage });

export const upload = multer({
    storage,
})