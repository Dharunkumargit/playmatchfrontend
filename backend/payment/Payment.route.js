import express from "express";
import { paymentSuccess } from "../payment/Payment.controller.js";

const router = express.Router();

router.post("/success", paymentSuccess);

export default router;