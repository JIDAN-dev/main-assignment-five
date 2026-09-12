import { toast } from "react-toastify";

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

  // Remove one technology
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack(
      stack.filter(
        (technology) => technology.id !== id
      )
    );

    if (removedTechnology) {
      toast.success(
        `${removedTechnology.name} removed from your stack!`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);

    toast.success("All technologies removed!");
  };

  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} Technologies Selected
          </p>
        </div>

        {stack.length > 0 && (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
            {stack.length}
          </span>
        )}

      </div>

      {/* Empty State */}
      {stack.length === 0 ? (

        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">



          <p className="mt-2 text-xs leading-5 text-gray-400">
           Your stack is empty.
          </p>

        </div>

      ) : (

        /* Selected Technologies */
        <div className="space-y-3">

          {stack.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >

              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Name + Category */}
              <div className="min-w-0 flex-1">

                <h3 className="truncate text-sm font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {technology.category}
                </p>

              </div>

              {/* Remove */}
              <button
                onClick={() => handleRemove(technology.id)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              >
                ✕
              </button>

            </div>

          ))}

        </div>

      )}

      {/* Remove All */}
      {stack.length > 0 && (

        <button
          onClick={handleRemoveAll}
          className="mt-5 w-full rounded-full border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>

      )}

    </aside>
  );
}

export default YourStack;