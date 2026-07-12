import { generateContent } from "../services/aiService";
import { formatIngredients } from "../utils/recipeUtils";

async function customizeRecipeTool({ recipe, preference }) {
  const prompt = `
You are an expert chef.

Modify this recipe to make it ${preference}.

Recipe Name:
${recipe.strMeal}

Category:
${recipe.strCategory}

Ingredients:
${formatIngredients(recipe)}

Instructions:
${recipe.strInstructions}

Return:

# Recipe Name

# Updated Ingredients

# Updated Instructions

# Why these changes were made
`;

  return generateContent([
    {
      role: "system",
      content:
        "You are an expert chef and nutrition assistant.",
    },
    {
      role: "user",
      content: prompt,
    },
  ]);
}

export const tools = {
  customize_recipe: customizeRecipeTool,
};