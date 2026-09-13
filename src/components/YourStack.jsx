export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100 lg:sticky lg:top-24">
      <h3 className="text-lg font-semibold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0
          ? "No technology selected yet"
          : `${stack.length} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {stack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center text-sm text-slate-400">
            Pick a technology from the grid to start building your stack.
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3"
            >
              <img src={tech.icon} alt="" className="h-8 w-8 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">{tech.name}</p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from stack`}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
