import express from "express";
const  router = express.Router();
import { createUser, login,Updateuserbyid,UpdateSelectionbymobnum } from "../users/Users.controller.js";


router.post("/signup", createUser);
router.put("/updateuserbyid/:id",Updateuserbyid)
router.post("/login", login);
router.put("/updatesportsoptions",UpdateSelectionbymobnum)


export default router;