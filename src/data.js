const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Dipendra Dhami",
  title: "Computer Engineer & Engineering Lead",
  tagline:
    "I build and lead delivery of full-stack web products, from architecture and APIs to secure releases.",
  location: "Kathmandu, Nepal",
  email: "dipendrabahadurdhami77@gmail.com",
  phone: "+977 9746871143",
  photo: `${base}photo.jpg`,
  cv: `${base}Dipendra_Dhami_CV.pdf`,
  links: {
    github: "https://github.com/dipendrabahadurdhami",
    linkedin: "https://linkedin.com/in/dipendra-bahadur-dhami",
    youtube: "https://www.youtube.com/@dipendradhami77",
  },
};

export const about = [
  "I'm a computer engineer and the founder of DhamiPlus Pvt. Ltd. in Kathmandu. These days I split my time between architecture, API design, code review and getting releases out the door for client and in-house products.",
  "My path started with bug hunting and web application vulnerability analysis, so security is part of how I design things, not something I add at the end. Along the way I picked up the MERN stack, and I still enjoy writing the code myself.",
  "Outside of engineering I edit video in Adobe Premiere Pro and post on YouTube.",
];

export const experience = [
  {
    range: "2026 — Present",
    role: "Founder, Project Manager & Technical Lead",
    company: "DhamiPlus Pvt. Ltd.",
    url: "https://dhamiplus.com",
    points: [
      "Set engineering practices, coding standards and implementation plans for client and in-house projects.",
      "Allocate developers, guide estimation and design, and help resolve complex technical issues.",
      "Design system architecture, REST APIs and secure integrations: QR payments, Google and Facebook sign-in, email and SMS OTP, Zoom, Google Meet and YouTube.",
      "Run code reviews, testing, dependency updates and documentation across Git repositories.",
      "Coordinate releases with clients, then fix defects and production issues after launch.",
      "Mentor the team and keep reusable components, technical records and handover notes for every project.",
    ],
    tech: ["MERN", "REST APIs", "Git", "CI/CD"],
  },
  {
    range: "Aug 2025 — Jan 2026",
    role: "Full Stack Developer",
    company: "Eyecoredigital",
    points: [
      "Built responsive front-end interfaces and back-end features for websites and web applications.",
      "Maintained WordPress sites: bug fixes, performance work and updates.",
      "Worked with the team on real client projects and helped with promotional video editing.",
    ],
    tech: ["JavaScript", "PHP", "WordPress"],
  },
];

export const projects = [
  {
    name: "Company Darta",
    url: "https://companydarta.com",
    kind: "Marketplace",
    text: "An expert marketplace with courses, booked meetings and interactive live classes. Integrates Zoom and Google Meet for sessions and YouTube for recordings.",
    tech: ["Zoom", "Google Meet", "YouTube API"],
  },
  {
    name: "PlusCals",
    kind: "SaaS · In development",
    text: "Subscription SaaS for business management and billing on web and mobile. Multi-role access, staff attendance, Nepali and English UI. Being built to meet IRD e-billing requirements.",
    tech: ["Web", "Mobile", "Billing"],
  },
  {
    name: "Ramro Pasal",
    url: "https://ramropasal.com",
    kind: "Client project",
    text: "MERN e-commerce store delivered for a client, led end to end as project manager.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "eRastriya",
    url: "https://erastriya.com",
    kind: "Client project",
    text: "News portal built for a client with a publishing workflow and a responsive reading experience.",
    tech: ["Web"],
  },
  {
    name: "Sheetal Property",
    url: "https://sheetalproperty.com",
    kind: "Client project",
    text: "Property listing website for a client, focused on clear presentation and easy enquiries.",
    tech: ["Web"],
  },
  {
    name: "Signify",
    kind: "College project",
    text: "An accessible sign interpreter application that uses basic machine learning concepts to support hearing-impaired users.",
    tech: ["Machine learning"],
  },
];

export const skills = [
  { group: "Leadership", items: ["Architecture", "Team Leadership", "Code Review", "Release Management", "Secure Development"] },
  { group: "Full-stack", items: ["MERN", "Node.js / Express", "React.js", "JavaScript", "PHP", "Java", "WordPress"] },
  { group: "Data & APIs", items: ["REST API Design", "Database Design", "MongoDB", "MySQL"] },
  { group: "Tooling", items: ["Git & GitHub", "CI/CD", "Burp Suite", "Adobe Premiere Pro"] },
];

export const education = [
  { range: "2021 — 2025", title: "Bachelor of Computer Engineering", place: "Pokhara University, Madan Bhandari College of Engineering", note: "Full university scholarship" },
  { range: "2018 — 2020", title: "Higher Secondary Education, Science", place: "Radiant Secondary School, Kathmandu" },
  { range: "2017", title: "Secondary Education Examination (SEE)", place: "Shree Mahendranagar Secondary School, Kanchanpur" },
];
