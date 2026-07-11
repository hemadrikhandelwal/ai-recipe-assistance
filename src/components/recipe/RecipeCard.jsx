import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
     <Link to={`/recipe/${recipe.idMeal}`}>
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {recipe.strMeal}
        </h2>

        <p className="text-gray-500 mt-2">
          {recipe.strArea}
        </p>

        <p className="text-sm text-orange-500 mt-2">
          {recipe.strCategory}
        </p>

      </div>
    </div>
    </Link>
  );
}

export default RecipeCard;