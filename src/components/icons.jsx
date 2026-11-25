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

export const GitHub = () => <FaGithub size={24} aria-hidden="true" />;
export const LinkedIn = () => <FaLinkedin size={24} aria-hidden="true" />;
export const YouTube = () => <FaYoutube size={24} aria-hidden="true" />;
export const Mail = () => <LuMail size={24} aria-hidden="true" />;
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
