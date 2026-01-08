import express from "express";
import {
  createClass,
  getClasses,
  
  addReview,
  bookClass,
  updateClassById,
} from "../classes/Classes.controller.js";

const router = express.Router();

router.post("/createclass", createClass);                
router.get("/getclasses", getClasses);                  // Explore Classes
router.put("/updateclassbyid/:id", updateClassById);          // Class Detail
router.post("/addreview", addReview);        // Reviews
router.post("/bookclass", bookClass);          // Book Now

export default router;