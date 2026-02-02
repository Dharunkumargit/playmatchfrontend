import express from "express";
import {
  createBooking,
  getMyBookings,
  cancelBooking,
  getAllBookings,
} from "../booking/booking.controller.js";

const router = express.Router();


router.post("/createbooking", createBooking);
router.get("/getbookings", getMyBookings);


router.put("/cancelbookings/:id", cancelBooking);

router.get("/getallbookings", getAllBookings);



export default router;