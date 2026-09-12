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
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-2 py-1 text-xs text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="rounded-full bg-gray-100 px-2 py-1">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-3 text-sm">
        ⭐ {technology.rating}
      </div>

      <button className="mt-4 w-full rounded-md bg-gray-900 py-2 text-sm font-medium text-white">
        Add to Stack
      </button>

    </div>
  );
}

export default TechnologyCard;