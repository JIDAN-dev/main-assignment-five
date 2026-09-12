function Hero() {
  return (
    <section className="min-h-[500px] px-6 py-16 flex flex-col items-center justify-center text-center">
      
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
        Build Your Perfect Stack
      </p>

      <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Discover the{" "}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Right Technology 
        </span>{" "}
        for Your Project
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
        Explore modern frontend, backend, database, styling, and DevOps
        technologies and build your own development stack.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white">
          Explore Technologies
        </button>

        <button className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;