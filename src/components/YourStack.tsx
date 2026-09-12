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

interface YourStackProps {
  stack: Technology[];
  setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}

function YourStack({
  stack,
  setStack,
}: YourStackProps) {

  const handleRemove = (id: string) => {
    setStack(
      stack.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {stack.length} Technologies Selected
        </p>
      </div>

      {stack.length === 0 ? (

        <div className="rounded-xl bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-500">
            No technologies selected yet.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Add technologies from the list to build your stack.
          </p>
        </div>

      ) : (

        <div className="space-y-3">

          {stack.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="h-9 w-9 object-contain"
              />

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => handleRemove(technology.id)}
                className="text-lg text-gray-400 hover:text-red-500"
              >
                ✕
              </button>

            </div>

          ))}

        </div>

      )}

      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-5 w-full rounded-full border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}

    </aside>
  );
}

export default YourStack;