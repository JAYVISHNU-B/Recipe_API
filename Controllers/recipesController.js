import Recipes from "../Models/recipesSchema.js";

//create / post method

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipes(req.body); 
    await newRecipe.save(); 
    res
      .status(200)
      .json({ message: "recipes added Successfully", data: newRecipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get all method

export const getAllRecipes = async (req, res) => {
  try {
    const getRecipe = await Recipes.find();
    res
      .status(200)
      .json({ message: "recipes retrieved successfully", data: getRecipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get by id method
export const getRecipeById = async (req, res) => {
  try {
    const RecipeId = req.params.id;
    const Recipe = await Recipes.findById(RecipeId);
    if (!Recipe) {
      return res.status(404).json({ message: "recipes Not Found" });
    }
    res
      .status(200)
      .json({ message: "recipes retrieved successfully", data: Recipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update method

export const updateRecipe = async (req, res) => {
  try {
    const RecipeId = req.params.id;
    const { recipename,cookTime,price } = req.body;
    const result = await Recipes.findByIdAndUpdate(
      { _id: RecipeId },
      { recipename,cookTime,price},
      {new:true},
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "recipes Not Found" });
    }
    res.status(200).json({ message: "recipes Updated", data: result });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete method

export const deleteRecipe = async(req,res)=>{

    try {
        const RecipeId = req.params.id;
        const result = await Recipes.findByIdAndDelete({_id:RecipeId}) 
        if(!result){
            return res.status(404).json({ message: "recipes Not Found" });
        } 
        const Recipe = await Recipes.find();
        res.status(200).json({message:"recipes deleted", data:Recipe})
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
          });
    }
}