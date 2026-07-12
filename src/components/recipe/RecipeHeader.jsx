function RecipeHeader({ recipe }) {
  return (
    <>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-[450px] object-cover rounded-xl shadow-lg"
      />

      <h1 className="text-4xl font-bold mt-8">
        {recipe.strMeal}
      </h1>

      <div className="flex gap-4 mt-5 flex-wrap">
        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
          🍽 {recipe.strCategory}
        </span>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
          🌍 {recipe.strArea}
        </span>
      </div>
    </>
  );
}

export default RecipeHeader;