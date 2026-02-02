import Payment from "../payment/Payment.schema.js";
import { confirmBooking } from "../booking/Booking.service.js";

export const handlePaymentSuccess = async (data) => {
  const payment = await Payment.create(data);

  await confirmBooking(data.booking);

  return payment;
};