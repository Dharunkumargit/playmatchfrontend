import { generateOtp } from "../utils/otp.js";
import { saveOtp,  verifyOtps } from "../utils/otpStore.js";
import { sendOtpSms } from "../utils/sms.js";

export const sendOtp = async (phonenumber) => {
  const otp = generateOtp();

  saveOtp(phonenumber, otp);
  await sendOtpSms(phonenumber, otp);
};

export const verifyOtp = async (phonenumber, otp) => {
  const isValid = verifyOtps(phonenumber, otp);

  if (!isValid) {
    throw new Error("Invalid or expired OTP");
  }

  return true;
};