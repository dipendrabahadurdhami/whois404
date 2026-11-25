import { useLayoutEffect, useRef } from "react";

// Spreads the letters slightly so a single line ends exactly at its container's edge.
export default function FitText({ children, className = "" }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.closest("h1, h2, h3, p, div");

    const fit = () => {
      el.style.letterSpacing = "0px";
      el.style.marginRight = "0px";
      const extra = parent.clientWidth - el.getBoundingClientRect().width;
      const n = el.textContent.length;
      const limit = parseFloat(getComputedStyle(el).fontSize) * 0.05;
      if (extra > 0 && extra / n <= limit) {
        const ls = extra / n;
        el.style.letterSpacing = `${ls}px`;
        el.style.marginRight = `${-ls}px`;
      }
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(parent);
    if (document.fonts?.ready) document.fonts.ready.then(fit);
    return () => ro.disconnect();
  }, []);

  return (
    <span ref={ref} className={`inline-block whitespace-nowrap ${className}`}>
      {children}
    </span>
  );
}
