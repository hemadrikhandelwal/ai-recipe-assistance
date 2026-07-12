import { getIngredientsArray } from "../../utils/recipeUtils";

function IngredientList({ recipe }) {
  const ingredients = getIngredientsArray(recipe);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-5">
        Ingredients
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {ingredients.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 rounded-lg border bg-white shadow-sm"
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
  );
}

export default IngredientList;