import { FaGithub, FaLinkedin, FaYoutube, FaJava } from "react-icons/fa6";
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJavascript, SiPhp,
  SiWordpress, SiGit, SiGithub, SiBurpsuite, SiZoom, SiGooglemeet, SiYoutube,
} from "react-icons/si";
import {
  LuMail, LuSun, LuMoon, LuArrowUpRight, LuLock, LuLayers, LuUsers, LuGitPullRequest,
  LuRocket, LuShieldCheck, LuDatabase, LuWorkflow, LuGlobe, LuSmartphone, LuReceipt,
  LuBrain, LuClapperboard, LuBraces, LuDownload,
} from "react-icons/lu";

export const GitHub = () => <FaGithub size={22} aria-hidden="true" />;
export const LinkedIn = () => <FaLinkedin size={22} aria-hidden="true" />;
export const YouTube = () => <FaYoutube size={22} aria-hidden="true" />;
export const Mail = () => <LuMail size={22} aria-hidden="true" />;
export const Sun = () => <LuSun size={18} aria-hidden="true" />;
export const Moon = () => <LuMoon size={18} aria-hidden="true" />;
export const Lock = ({ className = "" }) => <LuLock size={14} className={className} aria-hidden="true" />;
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
  "Database Design": LuDatabase, "Web": LuGlobe, "Mobile": LuSmartphone, "Billing": LuReceipt,
  "Machine learning": LuBrain,
};

export function TechIcon({ name, size = 14 }) {
  const Icon = map[name] || LuBraces;
  return <Icon size={size} aria-hidden="true" />;
}
