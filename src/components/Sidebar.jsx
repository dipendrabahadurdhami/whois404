import { useEffect, useState } from "react";
import { profile } from "../data";
import { GitHub, LinkedIn, YouTube, Sun, Moon, Download } from "./icons";
import ContactMenu from "./ContactMenu";
import FitText from "./FitText";
import { useDark, toggleTheme, setTheme, savedTheme, autoTheme } from "../theme";

const nav = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
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

function Theme() {
  const dark = useDark();

  useEffect(() => {
    // follow the visitor's clock until they choose a theme themselves
    const id = setInterval(() => {
      if (!savedTheme()) setTheme(autoTheme(), false);
    }, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      title={`Switch to ${dark ? "light" : "dark"} theme`}
      className="block text-fg transition hover:scale-110"
    >
      {dark ? <Moon /> : <Sun />}
    </button>
  );
}

export default function Sidebar() {
  const active = useActive(nav.map(([id]) => id));
  const social = [
    [profile.links.github, "GitHub", <GitHub />],
    [profile.links.linkedin, "LinkedIn", <LinkedIn />],
    [profile.links.youtube, "YouTube", <YouTube />],
  ];

  return (
    <header className="[container-type:inline-size] lg:sticky lg:top-0 lg:h-screen lg:w-[44%] lg:py-16">
      <div className="w-full lg:flex lg:h-full lg:flex-col lg:justify-between lg:gap-6">
      <div>
        <img
          src={profile.photo}
          alt="Dipendra Dhami"
          width="80"
          height="80"
          className="mb-5 h-20 w-20 rounded-full object-cover ring-2 ring-line"
        />
        <h1 className="text-[12.6cqw] font-semibold leading-none tracking-tight">
          <a href="#"><FitText>{profile.name}</FitText></a>
        </h1>
        <h2 className="mt-3 text-[5.1cqw] font-medium leading-tight"><FitText>{profile.title}</FitText></h2>
        <p className="justify-text no-hyphens mt-4 w-0 min-w-full leading-relaxed text-muted">{profile.tagline}</p>
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
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-light transition hover:opacity-90 lg:mt-8"
        >
          <Download /> Download CV
        </a>
      </div>

      <ul className="mt-8 flex w-full items-center justify-between lg:mt-0" aria-label="Social">
        {social.map(([href, label, icon]) => (
          <li key={label}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} title={label} className="block text-muted transition hover:text-accent">
              {icon}
            </a>
          </li>
        ))}
        <li><ContactMenu type="email" /></li>
        <li><ContactMenu type="phone" /></li>
        <li><Theme /></li>
      </ul>
      </div>
    </header>
  );
}
