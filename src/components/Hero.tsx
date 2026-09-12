function Hero() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Build Your Ideal
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Development{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Discover the right technologies for your project and create a
            powerful development stack that fits your needs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 px-6 py-3 font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-2xl border border-gray-300 px-6 py-3 font-semibold text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-72 w-full max-w-md items-center justify-center rounded-3xl">
            <span>
             <img src="/src/assets/banner-stack.png" alt="" />
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;