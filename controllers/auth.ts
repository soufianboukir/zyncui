import type { Request, Response } from "express";
import { supabase } from "../config/supabase.ts";
import config from "../config/config.ts";

export async function register(req: Request, res: Response) {
  const { email, password, name } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
      emailRedirectTo: `${config.APP_BASE_URL}/verify`,
    },
  });

  if (error) return res.status(400).json({ error: error.message });
  if (!error && data.user) {
    await supabase.from("profiles").insert({
      user_id: data.user.id,
      full_name: data.user.user_metadata.name,
      role: "user",
      created_at: new Date(),
    });
  }

  res.json({ user: data.user });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ session: data.session, user: data.user });
}
