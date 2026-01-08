import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    totalReviews: { type: Number, default: 0 },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: String,
  },
  { timestamps: true }
);

const bookingSchema = new mongoose.Schema(
    {
        userName: String,
        date: String,   // "2024-10-05"
        time: String,   // "10:00 AM"
        status: {
          type: String,
          enum: ["confirmed", "cancelled"],
          default: "confirmed"
        }
      }
)


const coachSchema = new mongoose.Schema(
  {
    coachName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },
    about: String,
    sports: {
      type: String,
     
      required: true,
    },

    experience: {
      type: Number, // years
      required: true,
    },
    sportsCoached: [String],
    bio: {
      type: String,
    },

    profilePicture: {
      type: String, // image URL
    },

    certifications: [String],
    
    media: [
      {
        title: String,
        imageUrl: String,
      },
    ],

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    // ---------- APP + DASHBOARD SHARED ----------
    reviews: [reviewSchema],
    bookings: [bookingSchema],

    rating: {
      type: Number,
      default: 0,
    },

    totalBookings: {
      type: Number,
      default: 0,
    },

    commissionEarned: {
      type: Number,
      default: 0,
    },

    assignedClasses: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Coach = mongoose.model("Coach", coachSchema);
export default Coach;
