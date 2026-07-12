export function getIngredientsArray(recipe) {
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

export function formatIngredients(recipe) {
  return getIngredientsArray(recipe)
    .map((item) => `- ${item.measure} ${item.ingredient}`)
    .join("\n");
}