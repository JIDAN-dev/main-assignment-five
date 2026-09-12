import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

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

interface TechnologySectionProps {
  stack: Technology[];
  setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}

function TechnologySection({
  stack,
  setStack,
}: TechnologySectionProps) {

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  return (
    <section>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick the technologies you need to build your project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={handleAddToStack}
            isAdded={stack.some(
              (item) => item.id === technology.id
            )}
          />
        ))}
      </div>

    </section>
  );
}

export default TechnologySection;