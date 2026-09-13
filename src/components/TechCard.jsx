import { useState } from "react";

export default function TechCard({ tech, isAdded, onAdd }) {
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100">
      <div className="flex items-start justify-between">
        {iconFailed ? (
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-sm font-bold text-slate-600">
            {tech.name.charAt(0)}
          </span>
        ) : (
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="h-10 w-10 object-contain"
            onError={() => setIconFailed(true)}
          />
        )}
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{tech.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
            <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
