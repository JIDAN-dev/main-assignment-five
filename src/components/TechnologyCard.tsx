interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {

  // Logo background color
  const iconBackground: Record<string, string> = {
    react: "bg-blue-50",
    vue: "bg-green-50",
    svelte: "bg-orange-50",
    nextjs: "bg-gray-100",
    nodejs: "bg-green-50",
    postgresql: "bg-blue-50",
    redis: "bg-red-50",
    javascript: "bg-yellow-50",
    typescript: "bg-blue-50",
    java: "bg-red-50",
    tailwindcss: "bg-cyan-50",
    docker: "bg-blue-50",
  };

  // Badge color
  const badgeBackground: Record<string, string> = {
    react: "bg-blue-50 text-blue-500",
    vue: "bg-green-50 text-green-500",
    svelte: "bg-orange-50 text-orange-500",
    nextjs: "bg-purple-50 text-purple-500",
    nodejs: "bg-green-50 text-green-500",
    postgresql: "bg-blue-50 text-blue-500",
    redis: "bg-red-50 text-red-500",
    javascript: "bg-yellow-50 text-yellow-600",
    typescript: "bg-blue-50 text-blue-500",
    java: "bg-red-50 text-red-500",
    tailwindcss: "bg-cyan-50 text-cyan-500",
    docker: "bg-blue-50 text-blue-500",
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Top: Logo + Badge */}
      <div className="flex items-start justify-between">

        {/* Logo */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            iconBackground[technology.id] || "bg-gray-50"
          }`}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        {/* Badge */}
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${badgeBackground[technology.id] ||"bg-gray-50 text-gray-500"}`} >
          {technology.badge}
        </span>

      </div>

      {/* Name */}
      <h3 className="mt-4 text-base font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1.5 min-h-[58px] text-[11px] leading-5 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
    <div className="relative mt-4 flex items-center">

  {/* Category - Left */}
  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
    {technology.category}
  </span>

  {/* Difficulty - Center */}
 <span className="absolute left-[53%] -translate-x-1/2 whitespace-nowrap text-xs text-gray-500">
    {technology.difficulty}
  </span>

  {/* Rating - Right */}
  <div className="ml-auto flex items-center gap-1 text-xs font-medium text-gray-700">
    <span className="text-yellow-400">★</span>
    <span>{technology.rating}</span>
  </div>

</div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className="mt-3 w-full rounded-md bg-gray-900 py-2 text-[11px] font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;