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
    location: {
      type: String,
      default:"",
    },
    options: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
const signup = mongoose.model("signup", UserSchema);

export default signup;