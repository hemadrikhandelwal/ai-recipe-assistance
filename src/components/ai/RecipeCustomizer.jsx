import { useState } from "react";

function RecipeCustomizer({ onCustomize, loading }) {
  const [preference, setPreference] = useState("Vegetarian");

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-4">
        🤖 AI Recipe Customizer
      </h2>

      <select
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option>Vegetarian</option>
        <option>High Protein</option>
        <option>Low Carb</option>
        <option>Healthier</option>
      </select>

      <button
        onClick={() => onCustomize(preference)}
        disabled={loading}
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
      >
        {loading ? "Generating..." : "Customize Recipe"}
      </button>
    </div>
  );
}

export default RecipeCustomizer;