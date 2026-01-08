import express from "express";
import { addReview, createCoach, deleteCoach, getCoachById, getCoaches, updateCoach } from "../coaches/Coach.controller.js";
import { globalSearch } from "./seach.controller.js";

const router = express.Router();


// Admin + App
router.post("/createcoach", createCoach);
router.get("/getcoach", getCoaches);
router.get("/getcoachbyid/:id", getCoachById);
router.put("/updatecoachbyid/:id", updateCoach);
router.delete("/deletecoachbyid/:id", deleteCoach);
router.get("/search", globalSearch)

// App reviews
router.post("/addreviewbyid/:id", addReview);

export default  router;