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
    kind: "Platform",
    text: "Nepal's online platform for company registration and legal paperwork, run from an office in Anamnagar, Kathmandu. People apply online and the team deals with the government offices for them. It also hosts verified experts you can book, plus video courses and live classes.",
    highlights: [
      "Services: company registration, annual company works and amendments, tax and accounting compliance, trademark registration, legal consultation, court marriage, divorce and notary.",
      "One short online form per service, with the fee shown before you start, document upload and an application number to track progress.",
      "Expert directory with booked meetings, video courses and live classes using Zoom, Google Meet and YouTube recordings.",
      "Nepali and English interface.",
    ],
    tech: ["Zoom", "Google Meet", "YouTube API"],
  },
  {
    name: "Sheetal Property",
    url: "https://sheetalproperty.com",
    kind: "Marketplace",
    text: "A property marketplace for Nepal covering homes, land, rentals, stays, new projects and investments, with listings from local agencies.",
    highlights: [
      "Search by place, property type and budget across Buy, Rent, Stay, Projects and Invest tabs, plus a map view.",
      "Property types from houses, flats and land to commercial space, warehouses and agricultural land.",
      "Agencies can post listings, see buyer requests matched to demand and get leads by phone.",
      "Built-in calculators: home loan EMI, land units, land price, property tax, rental yield, rent vs buy and affordability.",
    ],
    tech: ["Web", "Maps"],
  },
  {
    name: "eRastriya",
    url: "https://erastriya.com",
    kind: "News portal",
    text: "A Nepali-language news portal with an English switch, built for fast reading and daily publishing.",
    highlights: [
      "Breaking-news ticker, featured stories, video news and live broadcast.",
      "Live NEPSE market data, currency rates, weather and the Nepali calendar (patro).",
      "Reader tools: e-paper, radio, Preeti to Unicode converter and date converter.",
      "Reader login and ad placements for sponsors.",
    ],
    tech: ["React"],
  },
  {
    name: "Ramro Pasal",
    url: "https://ramropasal.com",
    kind: "E-commerce",
    text: "MERN e-commerce store delivered for a client and led end to end as project manager.",
    highlights: [],
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "DhamiPlus",
    url: "https://dhamiplus.com",
    kind: "Company site",
    text: "The website of my engineering company: what we build, how clients reach us and where they sign in.",
    highlights: [
      "Services listed: website development, mobile apps, SEO, ad boosting, branding and design, and video editing.",
      "Product and marketing sections, Google sign-in, live chat and a contact-sales flow.",
    ],
    tech: ["Web"],
  },
  {
    name: "PlusCals",
    kind: "SaaS · In development",
    text: "Subscription SaaS for business management and billing on web and mobile.",
    highlights: [
      "Multi-role access, staff attendance and a Nepali and English interface.",
      "Being built to meet IRD e-billing requirements.",
    ],
    tech: ["Web", "Mobile", "Billing"],
  },
  {
    name: "Signify",
    kind: "College project",
    text: "An accessible sign interpreter application that uses basic machine learning concepts to support hearing-impaired users.",
    highlights: [],
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
