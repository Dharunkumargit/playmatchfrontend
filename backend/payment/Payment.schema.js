import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },

    paymentId: String,
    orderId: String,
    amount: Number,
    method: String,

    status: {
      type: String,
      enum: ["SUCCESS", "FAILED"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);