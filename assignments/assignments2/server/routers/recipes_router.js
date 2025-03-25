import express from "express";
import Recipe from "../models/recipe.js";

const router = express.Router();

// Fetch All
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.json({ message: error });
  }
});

// Create
router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, description, difficulty, ingredients, steps } = req.body;
  const recipe = new Recipe({
    name,
    description,
    difficulty,
    ingredients,
    steps,
  });

  try {
    const savedRecipe = await recipe.save();
    res.json(savedRecipe);
  } catch (error) {
    res.json({ message: error });
  }
});

// Fetch by Id
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRecipe);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    res.json(deletedRecipe);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
