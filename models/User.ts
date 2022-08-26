import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    wrongPassword: String,
    ip: String,
    country: String,
    city: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema)