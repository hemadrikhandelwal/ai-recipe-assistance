import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes, loading }) {
  if (loading) {
    return (
      <h2 className="text-center text-lg">
        Loading...
      </h2>
    );
  }

  if (!loading && recipes.length === 0) {
    return (
      <h2 className="text-center text-lg">
        No recipes found.
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;