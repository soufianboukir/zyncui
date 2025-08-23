import { Router } from "express";
import {
  forgotPassword,
  login,
  logout,
  profile,
  register,
  resetPassword,
} from "../controllers/auth.ts";

const router = Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", profile);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
