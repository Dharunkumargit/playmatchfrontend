import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  title: String,              // Single Session / 5 Session Pack
  sessions: Number,
  price: Number,
  validity: String,
});

const reviewSchema = new mongoose.Schema({
  userName: String,
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
});

const bookingSchema = new mongoose.Schema(
  {
    userName: String,
    packageTitle: String,
    amountPaid: Number,
    status: {
      type: String,
      enum: ["Booked", "Cancelled"],
      default: "Booked",
    },
  },
  { timestamps: true }
);

const classSchema = new mongoose.Schema(
  {
    classesname: { type: String, required: true },
    // Yoga, HIIT, Pilates
    coach: { type: String, required: true },
    coachAvatar: String,

    duration: String,
    location: { type: String },
    classprofile: { type: String },
    description: String,

    packages: [packageSchema],
    reviews: [reviewSchema],
    bookings: [bookingSchema],

    price: Number,
    commissionPercent: Number,

    totalbookings: { type: Number, default: 0 },
    commissionearned: { type: Number },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);
export default Class;