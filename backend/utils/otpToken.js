import jwt from "jsonwebtoken";

const OTP_SECRET = process.env.OTP_SECRET || "otp-secret-key";

export const createOtpToken = ({ phonenumber, otp }) => {
  return jwt.sign(
    { phonenumber, otp },
    OTP_SECRET,
    { expiresIn: "5m" } // OTP valid for 5 minutes
  );
};

export const verifyOtpToken = (token) => {
  return jwt.verify(token, OTP_SECRET);
};