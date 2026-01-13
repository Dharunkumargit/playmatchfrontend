import express from "express";
import { toggleFavorite, getFavorites } from "../favorite/Favorite.controller.js";

const router = express.Router();

router.post("/togglefavorite", toggleFavorite);
router.get("/getfavorites", getFavorites);

export default router;
