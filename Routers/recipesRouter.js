import express from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from '../Controllers/recipesController.js';

const router = express.Router();

router.post("/createRecipe",createRecipe)
router.get("/getRecipe",getAllRecipes)
router.get("/getRecipe/:id",getRecipeById)
router.put("/updateRecipe/:id",updateRecipe)
router.delete("/deleteRecipe/:id",deleteRecipe)

export default router;