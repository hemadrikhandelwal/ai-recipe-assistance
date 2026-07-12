import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeDetails } from "../services/recipeService";

function getIngredients(recipe) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  return ingredients;
}

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async () => {
    try {
      const data = await getRecipeDetails(id);
      setRecipe(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

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

  const ingredients = getIngredients(recipe);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      {/* Back Button */}

      <Link
        to="/search"
        className="inline-block mb-6 text-orange-600 hover:underline"
      >
        ← Back to Search
      </Link>

      {/* Recipe Image */}

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-[450px] object-cover rounded-xl shadow"
      />

      {/* Recipe Title */}

      <h1 className="text-4xl font-bold mt-8">
        {recipe.strMeal}
      </h1>

      {/* Category + Area */}

      <div className="flex flex-wrap gap-4 mt-4">

        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
          🍽 {recipe.strCategory}
        </span>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
          🌍 {recipe.strArea}
        </span>

      </div>

      {/* Ingredients */}

      <section className="mt-10">

        <h2 className="text-2xl font-semibold mb-5">
          Ingredients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {ingredients.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-lg p-4 shadow-sm bg-white"
            >
              <span className="font-medium">
                {item.ingredient}
              </span>

              <span className="text-gray-500">
                {item.measure}
              </span>
            </div>
          ))}

        </div>

      </section>

      {/* Instructions */}

      <section className="mt-12">

        <h2 className="text-2xl font-semibold mb-5">
          Instructions
        </h2>

        <p className="leading-8 whitespace-pre-line text-gray-700">
          {recipe.strInstructions}
        </p>

      </section>

      {/* YouTube */}

      {recipe.strYoutube && (
        <section className="mt-12">

          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
          >
            ▶ Watch on YouTube
          </a>

        </section>
      )}

      {/* AI Section Placeholder */}

      <section className="mt-16 border-t pt-10">

        <h2 className="text-3xl font-bold mb-3">
          🤖 AI Cooking Assistant
        </h2>

        <p className="text-gray-600 mb-6">
          AI-powered cooking features will appear here.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button
            disabled
            className="border rounded-lg p-3 bg-gray-100"
          >
            Explain Recipe
          </button>

          <button
            disabled
            className="border rounded-lg p-3 bg-gray-100"
          >
            Beginner Mode
          </button>

          <button
            disabled
            className="border rounded-lg p-3 bg-gray-100"
          >
            Ingredient Substitute
          </button>

          <button
            disabled
            className="border rounded-lg p-3 bg-gray-100"
          >
            Make Healthier
          </button>

        </div>

      </section>

    </div>
  );
}

export default RecipeDetails;