import { TechIcon } from "./icons";

export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-label={title} className="mb-20 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <h3 className="sticky top-0 z-10 -mx-6 mb-6 bg-bg/80 px-6 py-4 font-mono text-xs font-medium uppercase tracking-widest text-muted backdrop-blur lg:sr-only lg:relative lg:p-0">
        {title}
      </h3>
      {children}
    </section>
  );
}

export function Tags({ items }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
          <TechIcon name={t} />
          {t}
        </li>
      ))}
    </ul>
  );
}
