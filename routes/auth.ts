import { Router } from "express";
import { login, register } from "../controllers/auth.ts";

const router = Router();

router.post("/signup", register);
router.post("/login", login);

export default router;
