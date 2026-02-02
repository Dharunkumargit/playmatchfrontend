import * as  paymentService from "../payment/Payment.service.js";

export const paymentSuccess = async (req, res) => {
  try {
    const payment = await paymentService.handlePaymentSuccess(req.body);
    res.json({ success: true, payment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};