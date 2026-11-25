import { useEffect, useRef, useState } from "react";
import { SiGmail } from "react-icons/si";
import { LuMail, LuPhone, LuCopy, LuCheck, LuExternalLink } from "react-icons/lu";
import { profile } from "../data";

const subject = encodeURIComponent("Hello Dipendra");
const body = encodeURIComponent("Hi Dipendra,\n\nI found your portfolio and would like to talk about ");

const options = {
  email: {
    label: "Email",
    Icon: LuMail,
    value: profile.email,
    actions: [
      {
        text: "Open in Gmail",
        Icon: SiGmail,
        href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`,
        external: true,
      },
      { text: "Open mail app", Icon: LuExternalLink, href: `mailto:${profile.email}?subject=${subject}&body=${body}` },
    ],
  },
  phone: {
    label: "Phone",
    Icon: LuPhone,
    value: profile.phone,
    actions: [{ text: "Call now", Icon: LuPhone, href: `tel:${profile.phone.replace(/\s/g, "")}` }],
  },
};

export default function ContactMenu({ type }) {
  const { label, Icon, value, actions } = options[type];
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {
      const t = document.createElement("textarea");
      t.value = value; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); } catch (err) {}
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const item = "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-accent hover:text-light";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={`${label} options`}
        aria-expanded={open}
        title={value}
        className="block text-muted transition hover:text-accent"
      >
        <Icon size={22} aria-hidden="true" />
      </button>
      {open && (
        <div role="menu" className="absolute bottom-full left-0 z-30 mb-3 w-72 overflow-hidden rounded-lg border border-line bg-bg shadow-xl">
          <p className="border-b border-line px-4 py-2.5 font-mono text-xs text-muted">{value}</p>
          {actions.map(({ text, Icon: I, href, external }) => (
            <a key={text} role="menuitem" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className={item}>
              <I size={16} aria-hidden="true" /> {text}
            </a>
          ))}
          <button role="menuitem" onClick={copy} className={item}>
            {copied ? <LuCheck size={16} aria-hidden="true" /> : <LuCopy size={16} aria-hidden="true" />}
            {copied ? "Copied!" : `Copy ${type === "email" ? "address" : "number"}`}
          </button>
        </div>
      )}
    </div>
  );
}
