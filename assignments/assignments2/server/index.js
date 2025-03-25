import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipesRouter from "./routers/recipes_router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Routes
app.use(cors());
app.use(express.json());
app.use("/recipe", recipesRouter);
