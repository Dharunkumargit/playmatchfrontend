import * as BookingService from "../booking/Booking.service.js";

export const proceedToPay = async (req, res) => {
  try {
    // SLOT LOCK (optional Redis in prod)
    res.status(200).json({
      success: true,
      message: "Proceed to payment",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const confirmPaymentAndBook = async (req, res) => {
  try {
    const booking = await BookingService.createBooking({
      ...req.body,
      paymentStatus: "Paid",
      bookingStatus: "Confirmed",
    });

    res.status(201).json({
      success: true,
      message: "Booking Confirmed",
      data: booking,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const myBookings = async (req, res) => {
  try {
    const bookings = await BookingService.getUserBookings(req.params.userId);

    const now = new Date();

    const upcoming = bookings.filter(
      b => new Date(b.bookingDate) >= now && b.bookingStatus === "Confirmed"
    );

    const history = bookings.filter(
      b => new Date(b.bookingDate) < now || b.bookingStatus === "Completed"
    );

    res.status(200).json({
      success: true,
      data: {
        upcoming,
        history,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
