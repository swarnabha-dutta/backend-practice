import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,   
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    fullName: {
        type:String,
        required:true,
    },
    avatar: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (password) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
            },
            message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one" number, and one special character.',
        }
    },
    refreshToken: {
        type: String,
    },

    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        }
    ],


}, { timestamps: true });


userSchema.pre("save", async (next) => {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.isPassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}



userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id:this.
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    
}
export const User = mongoose.model("User", userSchema);