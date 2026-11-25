import { RIDGE, RIDGE_FILL } from "./bannerRidge";
import { toggleTheme, useDark } from "../theme";

const BG = "rgb(var(--bg))";
const FG = (a) => `rgb(var(--fg) / ${a})`;
const RED = "#E92B40";
const LIGHT = "#EEEEF1";
const CX = 1056;
const CY = 104;

const traces = [
  "M760 40 H860 L890 70 H960", "M740 92 H820 L850 122 H930", "M1180 36 H1260 L1290 66 H1400",
  "M1160 100 H1240 L1270 130 H1380 H1480", "M700 150 H790 L820 120 H880", "M1230 170 H1330 L1360 140 H1450",
  "M900 20 V50 L930 80", "M1120 20 V60 L1090 90",
];
const nodes = [[960, 70], [930, 122], [1400, 66], [1480, 130], [880, 120], [1450, 140], [930, 80], [1090, 90]];
const stars = [[690, 30, 1.6], [740, 64, 1.2], [790, 22, 1.4], [850, 52, 1], [905, 34, 1.6], [1180, 28, 1.4], [1240, 58, 1], [1300, 24, 1.6], [1370, 50, 1.2], [1430, 22, 1.4], [1500, 62, 1], [1560, 34, 1.4], [1130, 66, 1]];
const rays = Array.from({ length: 16 }, (_, i) => {
  const a = (i * Math.PI * 2) / 16;
  const r1 = 42;
  const r2 = i % 2 === 0 ? 62 : 54;
  return [CX + Math.cos(a) * r1, CY + Math.sin(a) * r1, CX + Math.cos(a) * r2, CY + Math.sin(a) * r2];
});
const gridX = Array.from({ length: 35 }, (_, i) => i * 48);
const gridY = [0, 48, 96, 144, 192, 240];

const morph = "origin-center [transform-box:fill-box] transition-all duration-700 ease-out";

export default function Banner() {
  const dark = useDark();
  const next = dark ? "light" : "dark";

  return (
    <svg
      viewBox="0 0 1632 240"
      preserveAspectRatio="xMidYMid slice"
      className="mb-8 block h-20 w-full rounded-lg lg:absolute lg:mb-0 lg:right-0 lg:top-16 lg:w-[50%]"
      role="img"
      aria-label="Circuit lines and mountains under a sun or moon"
    >
      <defs>
        <radialGradient id="sunCore" cx="38%" cy="34%" r="75%">
          <stop offset="0" stopColor={LIGHT} stopOpacity="0.55" />
          <stop offset="0.35" stopColor={RED} stopOpacity="1" />
          <stop offset="1" stopColor={RED} stopOpacity="1" />
        </radialGradient>
        <radialGradient id="sunGlow">
          <stop offset="0" stopColor={RED} stopOpacity="0.55" />
          <stop offset="0.4" stopColor={RED} stopOpacity="0.2" />
          <stop offset="1" stopColor={RED} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="moonGlow">
          <stop offset="0" stopColor={LIGHT} stopOpacity="0.28" />
          <stop offset="0.45" stopColor={RED} stopOpacity="0.14" />
          <stop offset="1" stopColor={RED} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="moonFace" cx="36%" cy="32%" r="80%">
          <stop offset="0" stopColor={LIGHT} />
          <stop offset="0.7" stopColor={LIGHT} stopOpacity="0.92" />
          <stop offset="1" stopColor="#000" stopOpacity="0.28" />
        </radialGradient>
        <clipPath id="moonClip"><circle cx={CX} cy={CY} r="30" /></clipPath>
        <linearGradient id="fadeX" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" style={{ stopColor: BG }} stopOpacity="1" />
          <stop offset="0.32" style={{ stopColor: BG }} stopOpacity="0.15" />
          <stop offset="0.7" style={{ stopColor: BG }} stopOpacity="0" />
          <stop offset="1" style={{ stopColor: BG }} stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="fadeY" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" style={{ stopColor: BG }} stopOpacity="0.85" />
          <stop offset="0.5" style={{ stopColor: BG }} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1632" height="240" style={{ fill: BG }} />
      <g style={{ stroke: FG(0.08) }} strokeWidth="1">
        {gridX.map((x) => <line key={x} x1={x} y1="0" x2={x} y2="240" />)}
        {gridY.map((y) => <line key={y} x1="0" y1={y} x2="1632" y2={y} />)}
      </g>
      <g fill="none" style={{ stroke: FG(0.26) }} strokeWidth="1.2" strokeLinejoin="round">
        {traces.map((d) => <path key={d} d={d} />)}
      </g>
      <g style={{ fill: BG, stroke: FG(0.4) }} strokeWidth="1.2">
        {nodes.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3.2" />)}
      </g>
      <g fontFamily="ui-monospace, Menlo, Consolas, monospace" fontSize="16" style={{ fill: FG(0.28) }}>
        <text x="778" y="30">&lt;/&gt;</text>
        <text x="1196" y="196">{"{ }"}</text>
        <text x="1396" y="30">&lt;/&gt;</text>
      </g>

      {/* stars appear at night */}
      <g className={`${morph} ${dark ? "opacity-100" : "opacity-0"}`} fill={LIGHT}>
        {stars.map(([x, y, r]) => <circle key={`${x}${y}`} cx={x} cy={y} r={r} opacity="0.7" />)}
      </g>

      {/* glows */}
      <circle cx={CX} cy={CY} r="130" fill="url(#sunGlow)" className={`${morph} pointer-events-none ${dark ? "scale-75 opacity-0" : "opacity-100"}`} />
      <circle cx={CX} cy={CY} r="120" fill="url(#moonGlow)" className={`${morph} pointer-events-none ${dark ? "opacity-100" : "scale-75 opacity-0"}`} />

      {/* sun */}
      <g className={`${morph} ${dark ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
        <g className="spin-slow origin-center [transform-box:fill-box]" stroke={RED} strokeWidth="2.4" strokeLinecap="round" opacity="0.9">
          {rays.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
        </g>
        <circle cx={CX} cy={CY} r="36" fill="none" stroke={RED} strokeOpacity="0.35" strokeWidth="1.2" />
        <circle cx={CX} cy={CY} r="30" fill="url(#sunCore)" />
      </g>

      {/* moon */}
      <g className={`${morph} ${dark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"}`}>
        <circle cx={CX} cy={CY} r="30" fill="url(#moonFace)" />
        <g clipPath="url(#moonClip)">
          <circle cx={CX - 9} cy={CY + 7} r="7.5" fill="#000" opacity="0.13" />
          <circle cx={CX + 11} cy={CY + 10} r="5.5" fill="#000" opacity="0.11" />
          <circle cx={CX + 5} cy={CY - 14} r="4" fill="#000" opacity="0.12" />
          <circle cx={CX - 15} cy={CY - 6} r="3.6" fill="#000" opacity="0.1" />
          <circle cx={CX + 16} cy={CY - 3} r="2.6" fill="#000" opacity="0.1" />
          <circle cx={CX + 24} cy={CY - 8} r="30" fill="#000" opacity="0.34" />
        </g>
      </g>

      <path d={RIDGE_FILL} style={{ fill: BG }} className="pointer-events-none" />
      <path d={RIDGE} fill="none" style={{ stroke: FG(0.62) }} strokeWidth="1.4" strokeLinejoin="round" className="pointer-events-none" />
      <rect width="1632" height="240" fill="url(#fadeX)" className="pointer-events-none" />
      <rect width="1632" height="240" fill="url(#fadeY)" className="pointer-events-none" />

      {/* click target: switches the theme */}
      <g
        role="button"
        tabIndex={0}
        aria-label={`Switch to ${next} theme`}
        className="cursor-pointer outline-none [&:focus-visible>circle]:stroke-accent"
        onClick={toggleTheme}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggleTheme())}
      >
        <title>{`Switch to ${next} theme`}</title>
        <circle cx={CX} cy={CY} r="46" fill="transparent" stroke="transparent" strokeWidth="2" />
      </g>
    </svg>
  );
}
