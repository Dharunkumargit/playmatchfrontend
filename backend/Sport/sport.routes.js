import express from "express";
import {
  addSport,
  getAllSports,
  getActiveSports,
  updateSport,
  deleteSport,
  
} from "../Sport/sport.controller.js";

const router = express.Router();

/* Dashboard */
router.post("/createsport", addSport);
router.get("/getsport", getAllSports);
router.put("/:id", updateSport);
router.delete("/deletesportbyid/:id", deleteSport);

/* App */
router.get("/getactivesport", getActiveSports);

export default router;