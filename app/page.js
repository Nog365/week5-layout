
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Dashboard Header */}
        <header className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Discover Delicious Recipes
          </h1>

          <p className="text-lg text-gray-600">
            Explore a collection of easy-to-follow recipes
            for every meal and skill level.
          </p>
        </header>

        {/* Recipe Cards Grid */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              category={recipe.category}
              difficulty={recipe.difficulty}
            />
          ))}
        </section>

      </div>
    </main>
  );
}
