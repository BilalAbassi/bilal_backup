import  express  from "express";
import { registerControllers,loginController,testController, forgotPasswordController } from "../controller/registerController.js";
import {requireSignIn,isAdmin} from "../middlewares/authMiddleware.js"


 // this file is for router 

 // register (post methord will be used for this ) || Post 

 const router = express.Router();

 router.post("/register", registerControllers);

 // FOR LOGIN || POST

 router.post("/login",loginController)
 
//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

 // text 
 router.get("/test",requireSignIn,isAdmin,testController)

 //protected route auth for user 
 router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

 //protected route auth for admin
 router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});







 export default router