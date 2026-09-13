import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

export default function TechnologyGrid() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load technology data from the local JSON file on mount.
  useEffect(() => {
    setLoading(true);
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technology data."))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore the <span className="text-gradient-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Pick the technologies you want and build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {loading ? (
            <div className="grid place-items-center rounded-2xl border border-dashed border-slate-200 py-24 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-pink-500" />
                Loading technologies…
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </div>
    </section>
  );
}
