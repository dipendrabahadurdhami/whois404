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
  banner: `${base}banner.webp`,
  bannerLight: `${base}banner-code-light.svg`,
  bannerCodeDark: `${base}banner-code-dark.svg`,
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
    tech: ["JavaScript", "PHP", "WordPress", "Video editing"],
  },
];

export const projects = [
  {
    name: "Company Darta",
    url: "https://companydarta.com",
    kind: "Platform",
    text: "Nepal's online platform for company registration and legal paperwork, with a Kathmandu office and verified experts.",
    highlights: [
      "Services: company registration, annual filings, tax, trademark, legal advice, marriage, divorce, notary.",
      "One online form per service with the fee shown first, document upload and an application number to track it.",
      "Book verified experts, take video courses and join live classes through Zoom, Google Meet and YouTube.",
    ],
    tech: ["Zoom", "Google Meet", "YouTube API", "Nepali & English"],
  },
  {
    name: "Sheetal Property",
    url: "https://sheetalproperty.com",
    kind: "Marketplace",
    text: "A property marketplace for Nepal covering homes, land, rentals, stays, new projects and investments nationwide.",
    highlights: [
      "Search by place, type and budget under Buy, Rent, Stay, Projects and Invest, with a map view.",
      "Agencies post listings, see buyer requests matched to demand and get leads straight to their phone.",
      "Built-in calculators for loan EMI, land price, property tax, rental yield, rent vs buy and affordability.",
    ],
    tech: ["Search & filters", "Maps", "Calculators", "Agency listings"],
  },
  {
    name: "eRastriya",
    url: "https://erastriya.com",
    kind: "News portal",
    text: "A Nepali-language news portal with an English switch, built for fast reading and everyday newsroom publishing.",
    highlights: [
      "Breaking-news ticker, featured stories, video news and live broadcast on the front page.",
      "Live NEPSE market data, currency rates, weather and the Nepali calendar (patro) in one place.",
      "Reader tools: e-paper, radio, a Preeti to Unicode converter and a date converter, plus reader login.",
    ],
    tech: ["React", "Nepali & English", "Market data", "Video news"],
  },
  {
    name: "Ramro Pasal",
    url: "https://ramropasal.com",
    kind: "E-commerce",
    text: "An online store delivered for a client as a MERN project, which I led end to end as project manager.",
    highlights: [
      "Full-stack MERN build: a React storefront, a Node.js and Express API and a MongoDB database.",
      "Led as project manager: planning, estimation and allocating developers to each part of the work.",
      "Code review and release testing done together with the client before the store went live.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "DhamiPlus",
    url: "https://dhamiplus.com",
    kind: "Company site",
    text: "The website of my engineering company, showing what we build and how clients reach us or sign in.",
    highlights: [
      "Services listed: website development, mobile apps, SEO, ad boosting, branding and video editing.",
      "Product and marketing sections covering domains, hosting, SEO, email marketing and ad campaigns.",
      "Google sign-in, a live chat widget and a contact-sales flow for new business enquiries.",
    ],
    tech: ["Web", "Google Sign-In", "Live chat", "SEO"],
  },
  {
    name: "PlusCals",
    kind: "SaaS · In development",
    text: "Subscription SaaS for business management and billing on web and mobile, built for Nepali businesses.",
    highlights: [
      "Multi-role access, so each person on a team sees only what their role needs to see and work on.",
      "Staff attendance tracking and a complete Nepali and English interface for every screen.",
      "Currently in development, being built to meet the IRD e-billing compliance requirements in Nepal today.",
    ],
    tech: ["Web", "Mobile", "Billing", "Nepali & English"],
  },
  {
    name: "Signify",
    kind: "College project",
    text: "An accessible sign interpreter application built to bridge communication gaps for hearing-impaired users.",
    highlights: [
      "Final semester project, developed by a small team using machine learning concepts from a workshop.",
      "Designed to be user-friendly and accessible, with a focus on clear and simple everyday use.",
      "Completed as a fully functional application for the final semester of the engineering degree.",
    ],
    tech: ["Machine learning", "Accessibility", "Sign language", "Team project"],
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
