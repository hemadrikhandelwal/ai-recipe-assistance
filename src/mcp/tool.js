import { generateContent } from "../services/aiService";
import { formatIngredients } from "../utils/recipeUtils";

// =========================
// Customize Recipe Tool
// =========================

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

  return await generateContent([
    {
      role: "system",
      content: "You are an expert chef and nutrition assistant.",
    },
    {
      role: "user",
      content: prompt,
    },
  ]);
}

// =========================
// Recipe Recommendation Tool
// =========================

async function recommendRecipeTool({ ingredients }) {
  const prompt = `
You are an expert chef.

The user has these ingredients:

${ingredients}

Recommend exactly 5 recipes.

For each recipe provide:

1. Recipe Name
2. Why it matches these ingredients
3. Difficulty (Easy/Medium/Hard)
4. Estimated Cooking Time

Return your answer in clean markdown.
`;

  return await generateContent([
    {
      role: "system",
      content: "You are an expert recipe recommendation assistant.",
    },
    {
      role: "user",
      content: prompt,
    },
  ]);
}

// =========================
// MCP Tools
// =========================

export const tools = {
  customize_recipe: customizeRecipeTool,
  recommend_recipe: recommendRecipeTool,
};