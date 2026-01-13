import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

// prevent duplicate likes
FavoriteSchema.index({ userId: 1, turfId: 1 }, { unique: true });

const Favorite = mongoose.model("Favorite", FavoriteSchema);
export default Favorite;