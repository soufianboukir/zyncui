import { User } from "@supabase/supabase-js";
import { supabase } from "../config/supabase";
import type { NextFunction, Request, Response } from "express";

interface authRequest extends Request {
  user: User;
}

export async function requireAuth(req: authRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ error: "No token provided" });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) return res.status(401).json({ error: "Invalid token" });

  req.user = user;
  next();
}
