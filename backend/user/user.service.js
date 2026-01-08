import User from "../user/user.model.js";
import bcrypt from "bcryptjs";
import { generateOtp } from "../utils/otp.js";
import { sendOtpSms } from "../utils/sms.js";

/* ================= CREATE USER ================= */
export const addUser = async (data) => {
  const existingUser = await User.findOne({
    $or: [
      { emailid: data.emailid },
      { phonenumber: data.phonenumber },
      { userid: data.userid }
    ],
  });
  ;

  if (existingUser) {
    throw new Error("User already exists");
  }

  const rawPassword = data.password || "User@123";

const hashedPassword = await bcrypt.hash(rawPassword, 10);

  const user = await User.create({
    ...data,
    password: hashedPassword,
  });

  return user;
};

/* ================= LOGIN USER ================= */
export const loginUser = async ({ emailid, password }) => {
  const user = await User.findOne({ emailid });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  if (user.status !== "Active") {
    throw new Error("User is inactive");
  }

  return user;
};

/* ================= GET USERS ================= */
export const getUser = async () => {
  return await User.find().select("-password");
};

export const updateUser = async (id, data) =>
  await User.findByIdAndUpdate(id, data, { new: true });

export const removeUser = async (id) =>
  await User.findByIdAndDelete(id);


