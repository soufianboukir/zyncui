import mongoose from "mongoose";

const dbURL: string = process.env.MONGO_URL!;

export const dbConnection = async () => {
  try {
    await mongoose.connect(dbURL);
  } catch (err: unknown) {
    console.log("Failed db connection", err);
  }
};
