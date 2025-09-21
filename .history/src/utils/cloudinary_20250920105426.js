import { v2 as cloudinary } from "cloudinary"
import fs from "fs";




cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        // if cant get local file path
        if (!localFilePath) return null;
        // file get 
        const response= await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto"
            });
        // file has been successfully uploaded
        console.log(`file uploaded on cloudinary successfully ${response}`);
    } catch (error) {
        
    }
}