import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./routers/book_router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

// start
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

//routes
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API!");
});

// Book Router
app.use("/books", bookRouter);
