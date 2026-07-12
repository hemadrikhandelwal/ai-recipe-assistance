function AIRecipeResult({ loading, result }) {

    if (loading)
        return (
            <p className="mt-8 text-orange-600">
                Generating AI Recipe...
            </p>
        );

    if (!result) return null;

    return (
        <div className="mt-10 bg-gray-100 rounded-xl p-6">

            <h3 className="text-2xl font-bold mb-5">
                ✨ AI Customized Recipe
            </h3>

            <pre className="whitespace-pre-wrap leading-8">
                {result}
            </pre>

        </div>
    );
}

export default AIRecipeResult;