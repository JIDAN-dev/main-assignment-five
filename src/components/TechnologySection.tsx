import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

function TechnologySection() {
  return (
    <section className="px-6 py-12">
      
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology or create your own development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default TechnologySection;