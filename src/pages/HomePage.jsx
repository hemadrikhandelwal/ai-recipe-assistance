import { Link } from "react-router-dom";
import AIRecipeRecommendation from "./AIRecipeRecommendation";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Hero Section */}

      <section className="text-center">

        <h1 className="text-5xl font-bold">
          🍽 AI Recipe Assistant
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Discover recipes, browse cuisines, and let AI help you cook smarter.
        </p>

      </section>

      {/* AI Recommendation */}

      <section className="mt-14">
        <AIRecipeRecommendation />
      </section>

      {/* Quick Navigation */}

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Explore Recipes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            to="/search"
            className="rounded-xl border p-8 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">
              🔍 Search Recipes
            </h3>

            <p className="text-gray-600 mt-3">
              Search thousands of delicious recipes by name.
            </p>
          </Link>


        </div>

      </section>

    </div>
  );
}

export default HomePage;