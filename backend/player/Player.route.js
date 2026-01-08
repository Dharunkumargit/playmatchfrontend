import express from "express";
import { createPlayer, deletePlayer, getPlayerById, getPlayers, updatePlayer } from "../player/Player.controller.js";


const router = express.Router();

router.post("/createplayer", createPlayer);
router.get("/getplayers", getPlayers);
router.get("/getplayersbyid/:id", getPlayerById);
router.put("/updateplayerbyid/:id", updatePlayer);
router.delete("/deleteplayerbyid/:id", deletePlayer);

export default router;
