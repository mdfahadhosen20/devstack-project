const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-slate-900">
                Dev <span className="text-gradient-brand">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-medium text-slate-500">
              <a href="https://github.com" className="hover:text-slate-900">GitHub</a>
              <a href="https://twitter.com" className="hover:text-slate-900">Twitter</a>
              <a href="https://linkedin.com" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-500">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-slate-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
