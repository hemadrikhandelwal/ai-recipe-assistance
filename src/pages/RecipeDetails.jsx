import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getRecipeDetails } from "../services/recipeService";
import { customizeRecipe } from "../agents/recipeAgent";

import RecipeHeader from "../components/recipe/RecipeHeader";
import IngredientList from "../components/recipe/IngredientList";
import InstructionSection from "../components/recipe/InstructionSection";
import AIRecipeCustomizer from "../pages/AIRecipeCustomizer";

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const [customPrompt, setCustomPrompt] = useState("");
  const [aiRecipe, setAiRecipe] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  async function fetchRecipe() {
    try {
      setLoading(true);

      const data = await getRecipeDetails(id);

      setRecipe(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleCustomize() {
    if (!customPrompt.trim()) return;

    try {
      setAiLoading(true);
      setAiRecipe("");

      const response = await customizeRecipe(recipe, customPrompt);

      setAiRecipe(response);
    } catch (error) {
      console.error(error);
    } finally {
      setAiLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20 text-xl">
        Loading recipe...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-20 text-xl">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <Link
        to="/search"
        className="inline-block mb-6 text-orange-600 hover:underline"
      >
        ← Back to Search
      </Link>

      <RecipeHeader recipe={recipe} />

      <IngredientList recipe={recipe} />

      <InstructionSection recipe={recipe} />

      <AIRecipeCustomizer
        prompt={customPrompt}
        setPrompt={setCustomPrompt}
        onCustomize={handleCustomize}
        loading={aiLoading}
        result={aiRecipe}
      />

    </div>
  );
}

export default RecipeDetails;