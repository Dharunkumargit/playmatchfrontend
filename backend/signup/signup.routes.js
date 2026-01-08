import express from "express";
import { createUser, getAllUsers, getUserById, login, UpdateSelectionbymobnum, Updateuserbyid } from "../signup/signup.controller.js";
const router = express.Router();



router.post("/signup", createUser);
router.put("/updateuserbyid/:id",Updateuserbyid)
router.get("/getuserbyid/:id", getUserById);
router.get("/getalluser", getAllUsers);
router.post("/login",login);
router.put("/updatesportsoptions",UpdateSelectionbymobnum)



export default router;