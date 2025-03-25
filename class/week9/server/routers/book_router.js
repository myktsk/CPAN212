import express from "express";
import Book from "../models/book.js";

const router = express.Router();

// Fetch All
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
});

// Fetch by Id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.json({ message: error });
  }
});

// Search
router.get("/search", async (req, res) => {
  const { title, author, publisher, pages, release_date, ISBN } = req.query;
  const filters = {
    title,
    author,
    publisher,
    pages: parseInt(pages),
    release_date,
    ISBN,
  };
  try {
    const book = await Book.find(filters);
    res.json(book);
  } catch (error) {
    res.json({ message: error });
  }
});

// Create
router.post("/create", async (req, res) => {
  const { title, author, publisher, pages, release_date, ISBN } = req.body;
  const book = new Book({
    title,
    author,
    publisher,
    pages: parseInt(pages),
    release_date,
    ISBN,
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBook);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const removedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(removedBook);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
