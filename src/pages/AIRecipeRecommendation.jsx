import { useState } from "react";
import { recommendRecipes } from "../agents/recommendationAgent";

function AIRecipeRecommendation() {
  const [ingredients, setIngredients] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRecommendation() {
    if (!ingredients.trim()) {
      alert("Please enter some ingredients.");
      return;
    }

    try {
      setLoading(true);
      setRecommendations("");

      const result = await recommendRecipes(ingredients);

      setRecommendations(result);
    } catch (error) {
      console.error(error);
      alert("Failed to generate recipe recommendations.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold">
        🤖 AI Recipe Recommendation
      </h2>

      <p className="text-gray-600 mt-2 mb-6">
        Enter the ingredients you have and AI will recommend recipes.
      </p>

      <textarea
        rows={4}
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Example: Eggs, Tomatoes, Cheese, Onion"
        className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <button
        onClick={handleRecommendation}
        disabled={loading}
        className="mt-5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg transition"
      >
        {loading ? "Generating..." : "✨ Recommend Recipes"}
      </button>

      {loading && (
        <div className="mt-6">
          <p className="text-orange-600 font-medium animate-pulse">
            AI is finding the best recipes for you...
          </p>
        </div>
      )}

      {recommendations && (
        <div className="mt-8 bg-gray-100 rounded-xl p-6">

          <h3 className="text-2xl font-bold mb-4">
            🍳 Recommended Recipes
          </h3>

          <pre className="whitespace-pre-wrap leading-8 font-sans text-gray-700">
            {recommendations}
          </pre>

        </div>
      )}

    </section>
  );
}

export default AIRecipeRecommendation;