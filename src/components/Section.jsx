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
    <ul className={`mt-4 gap-2 ${items.length === 4 ? "grid grid-cols-2" : "flex flex-wrap"}`}>
      {items.map((t) => (
        <li key={t} className="inline-flex grow basis-[8rem] items-center justify-center gap-2 rounded-md border border-line px-3 py-2 font-mono text-xs [&:only-child]:grow-0 [&:only-child]:basis-auto">
          <span className="text-accent"><TechIcon name={t} size={16} /></span>
          {t}
        </li>
      ))}
    </ul>
  );
}
