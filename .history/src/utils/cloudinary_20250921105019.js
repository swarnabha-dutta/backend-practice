import { v2 as cloudinary } from "cloudinary"
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Debug: Log all environment variables
console.log("=== CLOUDINARY CONFIG DEBUG ===");
console.log("CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "SET" : "NOT SET");
console.log("=== END DEBUG ===");

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("❌ No local file path provided");
            return null;
        }

        // Check if file exists
        if (!fs.existsSync(localFilePath)) {
            console.log("❌ File does not exist:", localFilePath);
            return null;
        }

        console.log("📁 Uploading file:", localFilePath);
        console.log("📊 File size:", fs.statSync(localFilePath).size, "bytes");

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // Delete file after successful upload
        fs.unlinkSync(localFilePath);
        console.log("✅ File uploaded successfully:", response.url);
        console.log("🆔 Public ID:", response.public_id);

        return response;

    } catch (error) {
        console.log("❌ CLOUDINARY UPLOAD ERROR:");
        console.log("Error message:", error.message);
        console.log("Error details:", error);

        // Clean up file if it exists
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
            console.log("🧹 Cleaned up local file after error");
        }
        return null;
    }
};

export { uploadOnCloudinary };