import mongoose from "mongoose";



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
    
}, { timestamps: true });