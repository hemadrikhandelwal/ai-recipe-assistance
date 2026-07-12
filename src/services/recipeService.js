const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchRecipes(query){
    try{
        const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
        if(!response.ok){
            throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        return data.meals || [];
    }
    catch(error){
        console.error("Recipe Search Error:", error);
        throw error;
    }
}

export async function getRecipeDetails(id) {
  const response = await fetch(
    `${BASE_URL}/lookup.php?i=${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data = await response.json();

  return data.meals?.[0];
}