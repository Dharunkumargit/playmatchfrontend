import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobnum: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    dob: {
      type: String,
      required: true,
    },
    
    
    options: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", UserSchema);

export default User;