import { executeTool } from "../mcp/registry";

export async function customizeRecipe(recipe, preference) {
  return await executeTool("customize_recipe", {
    recipe,
    preference,
  });
}