import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    emailid: { type: String, required: true, unique: true },
    phonenumber: { type: String, unique: true, sparse: true },
    role: { type: String, required: true, enum: ["Store A", "Store B"] },
    password: { type: String, required: true },
    
    status: { type: String, default: "Active" },
    createdby: { type: String, default: "Admin" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;