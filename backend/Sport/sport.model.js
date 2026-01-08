import mongoose from "mongoose";

const sportSchema = new mongoose.Schema(
  {
    sportname: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    slotduration: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);
const Sport = mongoose.model("Sport", sportSchema);
export default Sport;