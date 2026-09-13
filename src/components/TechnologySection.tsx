import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import technologiesData from "../data/technologies.json";
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
  setStack,}: TechnologySectionProps) {

  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON data
  useEffect(() => {
    const loadTechnologies = () => {
      setTechnologies(technologiesData);
      setLoading(false);
    };

    loadTechnologies();
  }, []);

  // Add technology
  const handleAddToStack = (technology: Technology) => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  //loding
  if (loading) {
    return (
      <section>
        <div className="flex min-h-60 items-center justify-center">

          <div className="text-center">

            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

            <p className="mt-4 text-sm text-gray-500">
              Loading technologies...
            </p>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section>

      {/* Section Head */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
        Pick one technology per category to build your ideal stack.
        </p>

      </div>

      {/* Tech Card */}
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