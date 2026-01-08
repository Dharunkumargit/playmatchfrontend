const otpStore = new Map();

export const saveOtp = (phonenumber, otp) => {
  otpStore.set(phonenumber, {
    otp,
    expiry: Date.now() + 5 * 60 * 1000 // 5 minutes
  });
};

export const verifyOtps = (phonenumber, otp) => {
  const record = otpStore.get(phonenumber);

  if (!record) return false;
  if (record.expiry < Date.now()) {
    otpStore.delete(phonenumber);
    return false;
  }

  if (record.otp !== otp) return false;

  otpStore.delete(phonenumber); // one-time use
  return true;
};