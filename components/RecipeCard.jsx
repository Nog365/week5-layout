
export default function RecipeCard({ title, category, difficulty }) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-green-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex min-h-[120px] flex-col justify-center rounded-2xl bg-white p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        {title}
      </h2>

      <div className="flex items-center justify-between gap-3">
        <p className="text-base text-gray-500">
          {category}
        </p>

        <span
          className={`rounded-lg px-3 py-1 text-sm font-medium ${
            difficultyColors[difficulty] || "bg-gray-100 text-gray-700"
          }`}
        >
          {difficulty}
        </span>
      </div>
    </div>
  );
}
