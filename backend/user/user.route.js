import express from "express";
import { addUser, getUser, loginUser, removeUser, sendOtp,  updateUser } from "../user/user.controller.js";




const router = express.Router();

router.post("/createuser", addUser);
router.post("/login", loginUser);
router.post("/sendotp", sendOtp);

router.get("/getuser", getUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", removeUser);

export default router;