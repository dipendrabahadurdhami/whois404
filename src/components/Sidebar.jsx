import { useEffect, useState } from "react";
import { profile } from "../data";
import { GitHub, LinkedIn, YouTube, Mail, Sun, Moon, Download } from "./icons";

const nav = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
];

function useActive(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => document.getElementById(id) && io.observe(document.getElementById(id)));
    return () => io.disconnect();
  }, []);
  return active;
}

// Visitor's local time decides the default: light 06:00-17:59, dark otherwise.
const autoTheme = () => {
  const h = new Date().getHours();
  return h >= 6 && h < 18 ? "light" : "dark";
};
const saved = () => {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
};
const apply = (t) => document.documentElement.classList.toggle("dark", t === "dark");

function Theme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const tick = () => {
      if (saved()) return;
      const t = autoTheme();
      apply(t);
      setDark(t === "dark");
    };
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setDark(!dark);
  };
  return (
    <button onClick={toggle} aria-label="Switch between light and dark theme" title="Switch theme" className="text-muted transition hover:text-accent">
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}

export default function Sidebar() {
  const active = useActive(nav.map(([id]) => id));
  const social = [
    [profile.links.github, "GitHub", <GitHub />],
    [profile.links.linkedin, "LinkedIn", <LinkedIn />],
    [profile.links.youtube, "YouTube", <YouTube />],
    [`mailto:${profile.email}`, "Email", <Mail />],
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:gap-6 lg:py-16">
      <div>
        <img
          src={profile.photo}
          alt="Dipendra Dhami"
          width="80"
          height="80"
          className="mb-5 h-20 w-20 rounded-full object-cover ring-2 ring-line"
        />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          <a href="#">{profile.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium sm:text-xl">{profile.title}</h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted">{profile.tagline}</p>
        <p className="mt-4 font-mono text-xs text-muted">{profile.location}</p>

        <nav className="mt-10 hidden lg:block" aria-label="Sections">
          <ul className="space-y-1">
            {nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="group flex items-center py-1" aria-current={active === id ? "true" : undefined}>
                  <span className={`mr-4 h-px bg-muted transition-all group-hover:w-16 group-hover:bg-fg ${active === id ? "w-16 bg-fg" : "w-8"}`} />
                  <span className={`font-mono text-xs uppercase tracking-widest transition group-hover:text-fg ${active === id ? "text-fg" : "text-muted"}`}>
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={profile.cv}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-light transition hover:opacity-90 lg:mt-8"
        >
          <Download /> Download CV
        </a>
      </div>

      <ul className="mt-8 flex items-center gap-5 lg:mt-0" aria-label="Social">
        {social.map(([href, label, icon]) => (
          <li key={label}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} title={label} className="block text-muted transition hover:text-accent">
              {icon}
            </a>
          </li>
        ))}
        <li><Theme /></li>
      </ul>
    </header>
  );
}
