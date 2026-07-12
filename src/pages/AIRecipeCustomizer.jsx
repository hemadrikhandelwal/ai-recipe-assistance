function AIRecipeCustomizer({
  prompt,
  setPrompt,
  onCustomize,
  loading,
  result,
}) {
  return (
    <section className="mt-16 border-t pt-10">
      <h2 className="text-3xl font-bold">
        🤖 AI Recipe Customizer
      </h2>

      <p className="text-gray-600 mt-2 mb-5">
        Tell AI how you'd like to modify this recipe.
      </p>

      <textarea
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Make this recipe vegetarian and healthier."
        className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <button
        onClick={onCustomize}
        disabled={loading || !prompt.trim()}
        className="mt-5 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Generating..." : "✨ Customize Recipe"}
      </button>

      {loading && (
        <p className="mt-6 text-orange-600 font-medium animate-pulse">
          AI is customizing your recipe...
        </p>
      )}

      {result && (
        <div className="mt-8 rounded-xl bg-gray-100 p-6">
          <h3 className="text-xl font-bold mb-4">
            ✨ AI Customized Recipe
          </h3>

          <pre className="whitespace-pre-wrap leading-8 font-sans">
            {result}
          </pre>
        </div>
      )}
    </section>
  );
}

export default AIRecipeCustomizer;