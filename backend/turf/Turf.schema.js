import mongoose from "mongoose";



const TurfSchema = new mongoose.Schema(
  {
    turfid: {
      type: String,
      unique: true,
      index: true,
      default: () => new mongoose.Types.ObjectId().toString(),
    },

    turfname: { type: String, required: true },
    turfowner: { type: String, required: true },

    sports: [
      {
        type: String,
        enum: ["Football", "Cricket", "Tennis", "Basketball"],
      },
    ],

    images: [String],

    
    slotduration: {
      type: Number,
      enum: [30, 60, 90, 120],
      required: true,
    },

    timeRange: {
      start: String,
      end: String,
    },
    turfprofile : {
      type: String
    },
    
    location: {type:String},
    priceperslot: { type: Number, required: true },

    maxPlayers: { type: Number, default: 10 },
    allowFindPlayers: { type: Boolean, default: true },

    rating: { type: Number, default: 4.5 },
    totalReviews: { type: Number, default: 0 },

    commissionpaid: { type: Number, default: 10 },
    totalbookings: { type: Number, default: 0 },
    totalrevenue: { type: Number, default: 0 },

    rules: String,
    cancellationPolicy: String,

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Turf", TurfSchema);