import Booking from "../booking/Booking.schema.js";
import Turf from "../turf/Turf.schema.js";

export const createBooking = async (data) => {
  const booking = await Booking.create(data);

  // Update turf stats
  await Turf.findByIdAndUpdate(data.turfId, {
    $inc: {
      totalbookings: 1,
      totalrevenue: data.amount,
    },
  });

  return booking;
};

export const getUserBookings = async (userId) => {
  return await Booking.find({ userId })
    .populate("turfId")
    .sort({ bookingDate: -1 });
};
