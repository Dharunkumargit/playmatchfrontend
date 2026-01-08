import express from "express";
import {
  addSport,
  getAllSports,
  getActiveSports,
  updateSport,
  deactivateSport,
} from "../Sport/sport.controller.js";

const router = express.Router();

/* Dashboard */
router.post("/createsport", addSport);
router.get("/getsport", getAllSports);
router.put("/:id", updateSport);
router.patch("/:id/deactivate", deactivateSport);

/* App */
router.get("/getactivesport", getActiveSports);

export default router;