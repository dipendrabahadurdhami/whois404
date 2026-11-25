(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Theme toggle */
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    drawFrame && reduced && drawFrame();
  });

  /* Mobile menu */
  const menuBtn = document.getElementById("menu-btn");
  const links = document.getElementById("links");
  const setMenu = (open) => {
    links.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* Nav state + active link */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const sections = [...links.querySelectorAll("a")].map((a) => document.querySelector(a.getAttribute("href")));
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => s && spy.observe(s));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 80 + "ms";
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  /* Typing roles */
  const roles = ["Engineering Lead", "Full-Stack Developer", "Security-minded Builder", "Video Editor"];
  const roleEl = document.getElementById("role");
  let r = 0, c = 0, deleting = false;
  const type = () => {
    const word = roles[r];
    c += deleting ? -1 : 1;
    roleEl.textContent = word.slice(0, c);
    let delay = deleting ? 40 : 85;
    if (!deleting && c === word.length) { deleting = true; delay = 1800; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }
    setTimeout(type, delay);
  };
  if (reduced) roleEl.textContent = roles[0]; else type();

  /* Footer year */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* Subtle particle network background */
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");
  let w, h, pts = [], raf;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    const n = Math.min(70, Math.floor((innerWidth * innerHeight) / 22000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
    }));
  };
  function drawFrame() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const light = root.getAttribute("data-theme") === "light";
    const dot = light ? "10,10,12" : "255,255,255";
    for (const p of pts) {
      if (!reduced) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > innerHeight) p.vy *= -1;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.4, 0, 6.283);
      ctx.fillStyle = `rgba(${dot},.35)`;
      ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.strokeStyle = `rgba(233,43,64,${(1 - d / 130) * 0.28})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }
    if (!reduced) raf = requestAnimationFrame(drawFrame);
  }
  resize();
  drawFrame();
  window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); drawFrame(); });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf); else if (!reduced) drawFrame();
  });
})();
