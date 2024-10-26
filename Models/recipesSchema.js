import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
  recipename: { type: String, required: true },
  cookTime: Number,
  price: Number
});

const Recipes = mongoose.model("Recipes", recipesSchema);

export default Recipes;