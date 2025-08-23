import { Router } from "express";
import {
  forgotPassword,
  login,
  logout,
  profile,
  register,
  resetPassword,
  updateProfile,
} from "../controllers/auth.ts";
import { isAuth } from "../middlewares/isAuth.ts";

const router = Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", profile);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.put("/update-profile", isAuth, updateProfile);


export default router;
