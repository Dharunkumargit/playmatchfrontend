import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    bookingid: {
      type: String,
      unique: true,
      required: true,
    },
    playername: {
      type: String,
      required: true,
      trim: true,
    },
    totalbookings: {
      type: Number,
      required: true,
    },
    lastbookings: {
      type: String,
      required: true,
    },
    membership: {
      type: String,
      required: true,
    },
    totalspend: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);

export default Player;
