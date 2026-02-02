// models/Booking.model.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "signup",
      required: true,
    },

    turf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "turf",
      required: true,
    },

    sportType: {
      type: String,
      enum: ["Football", "Cricket", "Tennis", "Basketball"],
      required: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },

    timeSlot: {
      type: String, // "10:00 AM - 11:00 AM"
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    commission: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["PENDING", "CONFIRMED", "CANCELLED"],
      default: "PENDING",
    },

    paymentStatus: {
      type: String,
      enum: ["PENDING", "SUCCESS", "FAILED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;