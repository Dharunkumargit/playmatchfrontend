import express from "express";

import { createTurf, deleteTurf, getTurf, getTurfs, updateTurf } from "../turf/turf.controller.js";


const router = express.Router();

router.post("/createturf", createTurf);
router.get("/getturfs", getTurfs);
router.get("/getturfbyid/:id", getTurf);
router.put("/updateturfbyid/:id", updateTurf);
router.delete("/deleteturfbyid/:id", deleteTurf);

export default router;