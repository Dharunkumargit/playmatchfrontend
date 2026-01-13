import express from "express";
import { confirmPaymentAndBook, myBookings, proceedToPay } from "../booking/booking.controller.js";


const router = express.Router();

router.post("/proceed-to-pay", proceedToPay);
router.post("/confirm", confirmPaymentAndBook);
router.get("/my-bookings/:userId", myBookings);

export default router;
