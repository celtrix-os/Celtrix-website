import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String },
  username: { type: String }, 
  email: { type: String, required: false, unique: true },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);