import { useState } from "react";

import SearchBar from "../components/recipe/SearchBar";
import RecipeGrid from "../components/recipe/RecipeGrid";

import { searchRecipes } from "../services/recipeService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);

      const data = await searchRecipes(searchTerm);

      setRecipes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Search Recipes
      </h1>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSearch={handleSearch}
      />

      <RecipeGrid
        recipes={recipes}
        loading={loading}
      />
    </div>
  );
}

export default Search;