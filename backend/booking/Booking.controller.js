// controllers/booking.controller.js
import * as bookingService from "../booking/Booking.service.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const data = await bookingService.getUserBookings(req.user.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





/* Cancel booking */
export const cancelBooking = async (req, res) => {
  try {
    const booking = await bookingService.cancelBooking(req.params.id);
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* Admin Booking Management */
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};