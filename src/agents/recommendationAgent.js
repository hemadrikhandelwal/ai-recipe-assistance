import { executeTool } from "../mcp/registry";

export async function recommendRecipes(ingredients) {
  return await executeTool("recommend_recipe", {
    ingredients,
  });
}