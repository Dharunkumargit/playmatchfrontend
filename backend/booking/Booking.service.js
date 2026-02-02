// services/booking.service.js
import Booking from "../booking/Booking.schema.js";
import { v4 as uuidv4 } from "uuid";

export const createBooking = async (data) => {
  return await Booking.create({
    bookingId: `BOOK-${uuidv4().slice(0, 8)}`,
    ...data,
  });
};

/* Confirm booking after payment success */
export const confirmBooking = async (bookingId) => {
  return await Booking.findByIdAndUpdate(
    bookingId,
    {
      status: "CONFIRMED",
      paymentStatus: "SUCCESS",
    },
    { new: true }
  );
};

/* Cancel booking */
export const cancelBooking = async (bookingId) => {
  return await Booking.findByIdAndUpdate(
    bookingId,
    { status: "CANCELLED" },
    { new: true }
  );
};

/* User bookings: Upcoming & History */
export const getUserBookings = async (userId) => {
  const now = new Date();

  const bookings = await Booking.find({
    user: userId,
    status: "CONFIRMED",
  }).sort({ bookingDate: -1 });

  return {
    upcoming: bookings.filter(b => b.bookingDate > now),
    history: bookings.filter(b => b.bookingDate <= now),
  };
};

/* Admin booking management table */
export const getAllBookings = async () => {
  return await Booking.find()
    .populate("user turf")
    .sort({ createdAt: -1 });
};