import otpGenerator from "otp-generator";

export const generateOtp = () =>
  otpGenerator.generate(4, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });