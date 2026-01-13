import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      unique: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "signup",
      required: true,
    },

    turfId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Turf",
      required: true,
    },

    sport: String,

    bookingDate: {
      type: Date,
      required: true,
    },

    slot: {
      start: String,
      end: String,
    },

    amount: Number,

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },

    bookingStatus: {
      type: String,
      enum: ["Confirmed", "Cancelled", "Completed"],
      default: "Confirmed",
    },

    playerType: {
      type: String,
      enum: ["Book Alone", "Find Players"],
    },

    playersRequired: Number,
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;     
