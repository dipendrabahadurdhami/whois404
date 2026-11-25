import { FaGithub, FaLinkedin, FaYoutube, FaJava } from "react-icons/fa6";
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJavascript, SiPhp,
  SiWordpress, SiGit, SiGithub, SiBurpsuite, SiZoom, SiGooglemeet, SiYoutube, SiGoogle,
} from "react-icons/si";
import {
  LuMail, LuSun, LuMoon, LuArrowUpRight, LuLock, LuLayers, LuUsers, LuGitPullRequest,
  LuRocket, LuShieldCheck, LuDatabase, LuWorkflow,
  LuBrain, LuClapperboard, LuBraces, LuDownload, LuMonitor, LuReceiptText, LuMapPin, LuTabletSmartphone, LuLanguages, LuMessageCircle,
  LuGlobe, LuSearch, LuCalculator, LuBuilding2, LuTrendingUp, LuVideo, LuAccessibility, LuHand,
} from "react-icons/lu";

export const GitHub = () => <FaGithub size={22} aria-hidden="true" />;
export const LinkedIn = () => <FaLinkedin size={22} aria-hidden="true" />;
export const YouTube = () => <FaYoutube size={22} aria-hidden="true" />;
export const Mail = () => <LuMail size={22} aria-hidden="true" />;
export const Sun = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <g stroke="#E92B40" strokeWidth="1.8" strokeLinecap="round">
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return <line key={i} x1={12 + Math.cos(a) * 7.6} y1={12 + Math.sin(a) * 7.6} x2={12 + Math.cos(a) * 10.4} y2={12 + Math.sin(a) * 10.4} />;
      })}
    </g>
    <circle cx="12" cy="12" r="5.2" fill="#E92B40" />
    <circle cx="10.4" cy="10.4" r="1.6" fill="#EEEEF1" opacity="0.55" />
  </svg>
);
export const Moon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.2 14.6A8.6 8.6 0 1 1 9.4 3.8a7 7 0 0 0 10.8 10.8z" fill="currentColor" />
    <circle cx="9" cy="14.2" r="1.3" fill="rgb(var(--bg))" opacity="0.35" />
    <circle cx="12.6" cy="17.4" r="0.9" fill="rgb(var(--bg))" opacity="0.3" />
    <circle cx="7.4" cy="10" r="0.8" fill="rgb(var(--bg))" opacity="0.3" />
    <circle cx="19" cy="5" r="0.9" fill="#E92B40" />
  </svg>
);
export const Lock = ({ className = "" }) => <LuLock size={14} className={className} aria-hidden="true" />;
export const Globe = () => <LuGlobe size={14} aria-hidden="true" />;
export const Download = () => <LuDownload size={16} aria-hidden="true" />;
export const Arrow = ({ className = "" }) => <LuArrowUpRight size={16} className={className} aria-hidden="true" />;

const map = {
  "MERN": SiMongodb, "MongoDB": SiMongodb, "Express": SiExpress, "Node.js": SiNodedotjs,
  "Node.js / Express": SiNodedotjs, "React": SiReact, "React.js": SiReact, "JavaScript": SiJavascript,
  "PHP": SiPhp, "Java": FaJava, "WordPress": SiWordpress, "MySQL": SiMysql, "Git": SiGit,
  "Git & GitHub": SiGithub, "Burp Suite": SiBurpsuite, "Zoom": SiZoom, "Google Meet": SiGooglemeet,
  "YouTube API": SiYoutube, "Adobe Premiere Pro": LuClapperboard, "REST APIs": LuWorkflow,
  "REST API Design": LuWorkflow, "CI/CD": LuRocket, "Architecture": LuLayers, "Team Leadership": LuUsers,
  "Code Review": LuGitPullRequest, "Release Management": LuRocket, "Secure Development": LuShieldCheck,
  "Database Design": LuDatabase, "Web": LuMonitor, "Mobile": LuTabletSmartphone, "Billing": LuReceiptText,
  "Machine learning": LuBrain, "Maps": LuMapPin, "Nepali & English": LuLanguages, "Google Sign-In": SiGoogle, "Live chat": LuMessageCircle,
  "SEO": LuSearch, "Search & filters": LuSearch, "Calculators": LuCalculator, "Agency listings": LuBuilding2,
  "Market data": LuTrendingUp, "Video news": LuVideo, "Accessibility": LuAccessibility, "Sign language": LuHand,
  "Team project": LuUsers, "Video editing": LuClapperboard,
};

export function TechIcon({ name, size = 14 }) {
  const Icon = map[name] || LuBraces;
  return <Icon size={size} aria-hidden="true" />;
}
