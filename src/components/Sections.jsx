import Section, { Tags } from "./Section";
import { Arrow, Lock, TechIcon } from "./icons";
import { about, experience, projects, skills, education, profile } from "../data";

const hoverList = "group/list";
const hoverItem = "lg:group-hover/list:opacity-50 lg:hover:!opacity-100 transition-opacity";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-relaxed text-muted">
        {about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className={hoverList}>
        {experience.map((job) => (
          <li key={job.role} className={`mb-12 ${hoverItem}`}>
            <div className="grid gap-2 sm:grid-cols-8 sm:gap-6">
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted sm:col-span-2">{job.range}</p>
              <div className="sm:col-span-6">
                <h4 className="font-medium leading-snug">
                  {job.role} <span className="text-muted">·</span>{" "}
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-1 text-accent hover:underline">
                      {job.company}<Arrow />
                    </a>
                  ) : (
                    <span className="text-accent">{job.company}</span>
                  )}
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3"><span className="mt-2 h-px w-3 shrink-0 bg-muted" />{p}</li>
                  ))}
                </ul>
                <Tags items={job.tech} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className={hoverList}>
        {projects.map((p, i) => {
          const Tag = p.url ? "a" : "div";
          const props = p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {};
          return (
            <li key={p.name} className={`mb-10 ${hoverItem}`}>
              <Tag {...props} className="group grid gap-2 sm:grid-cols-8 sm:gap-6">
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted sm:col-span-2">
                  {String(i + 1).padStart(2, "0")} · {p.kind}
                </p>
                <div className="sm:col-span-6">
                  <h4 className="inline-flex items-baseline gap-1 font-medium leading-snug group-hover:text-accent">
                    {p.name}
                    {p.url && <Arrow className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                  {p.highlights.length > 0 && (
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3"><span className="mt-2 h-px w-3 shrink-0 bg-muted" />{h}</li>
                      ))}
                    </ul>
                  )}
                  {!p.url && (
                    <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                      <Lock /> Private project. Source and demo available on request.
                    </p>
                  )}
                  <Tags items={p.tech} />
                </div>
              </Tag>
            </li>
          );
        })}
      </ul>
      <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium hover:text-accent">
        More on GitHub <Arrow />
      </a>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-6">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-2 sm:grid-cols-8 sm:gap-6">
            <dt className="mt-1 font-mono text-xs uppercase tracking-wide text-muted sm:col-span-2">{s.group}</dt>
            <dd className="sm:col-span-6">
              <ul className="grid grid-cols-2 gap-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 rounded-md border border-line px-2.5 py-2.5 text-[13px] leading-tight sm:gap-2.5 sm:px-3 sm:text-sm [&:nth-child(odd):last-child]:col-span-2">
                    <span className="text-accent"><TechIcon name={i} size={18} /></span>
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-8">
        {education.map((e) => (
          <li key={e.title} className="grid gap-2 sm:grid-cols-8 sm:gap-6">
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted sm:col-span-2">{e.range}</p>
            <div className="sm:col-span-6">
              <h4 className="font-medium leading-snug">{e.title}</h4>
              <p className="mt-1 text-sm text-muted">{e.place}</p>
              {e.note && <p className="mt-1 text-sm text-accent">{e.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted lg:pb-24">
      <p className="mb-2">
        Want to work together?{" "}
        <a href={`mailto:${profile.email}`} className="text-accent hover:underline">{profile.email}</a>
        {" "}or {profile.phone}.
      </p>
      <p>Designed and built by Dipendra Dhami with React and Tailwind CSS.</p>
    </footer>
  );
}
