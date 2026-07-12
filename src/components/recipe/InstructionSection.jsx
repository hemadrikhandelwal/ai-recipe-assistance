function InstructionSection({ recipe }) {
  return (
    <>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-5">
          Instructions
        </h2>

        <p className="leading-8 whitespace-pre-line text-gray-700">
          {recipe.strInstructions}
        </p>
      </section>

      {recipe.strYoutube && (
        <section className="mt-12">
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
          >
            ▶ Watch on YouTube
          </a>
        </section>
      )}
    </>
  );
}

export default InstructionSection;