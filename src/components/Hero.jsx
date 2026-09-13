import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#technologies"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-200 transition-transform hover:scale-[1.02]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Illustration of a layered technology stack"
            className="w-56 sm:w-72 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
}
