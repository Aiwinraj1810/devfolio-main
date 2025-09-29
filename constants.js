export const METADATA = {
  author: "Aiwinraj K S",
  title: "Portfolio | Aiwinraj K S",
  description:
    "Aiwinraj K S is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Aiwinraj K S",
    "Frontend Engineer",
    "React Native Engineer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Frontend Developer who thinks in Flexbox",
  "I add just the right amount of CSS magic ✨",
  "I turn coffee into clean UI components",
  "Making the web modern, responsive & slightly prettier",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: aiwinraj1810@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aiwin-raj-k-s-a6749729a",
  },
  {
    name: "github",
    url: "https://github.com/Aiwinraj1810",
  },


];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    // "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",

    // "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "mui",
    "shadcn",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "cloudinary", "AWS", "react-hook-form"],
};

export const PROJECTS = [
  // {
  //   name: "React Native Directory",
  //   image: "/projects/react-native-directory.webp",
  //   blurImage: "/projects/blur/react-native-directory.webp",
  //   description:
  //     "Quickly search and filter React Native libraries from Raycast 🔌",
  //   gradient: ["#F14658", "#DC2537"],
  //   url: "https://www.raycast.com/shubh_porwal/react-native-directory",
  //   tech: ["typescript", "react", "raycast"],
  // },
  {
    name: "JK Cargocare",
    image: "/projects/jkcargo.jpeg",
    blurImage: "/projects/blur/medium-blur.webp",
    description:
      "A fully functional, production-ready Next.js and Tailwind CSS website showcasing cargo, shipping, and warehousing solutions.",

    gradient: ["#000066", "#6699FF"],
    url: "https://jkcargocare.com",
    tech: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    name: "The BRIDG",
    image: "/projects/thebridg.jpeg",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "A prop-tech platform built for investors to explore and manage high-ROI real estate opportunities.",

    gradient: ["#3C3C3C", "#000000"],

    url: "https://thebridg.com",
    tech: ["react", "tailwindcss", "nodejs", "mongodb"],
  },
  {
    name: "WoNo Admin Panel",
    image: "/projects/wono-main.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "WoNo Admin Panel – A scalable SaaS platform with modules for Sales, Finance, HR, IT, Admin, and Maintenance, plus apps like Meeting Room, Ticket, and Visitor Management to streamline enterprise operations.",
    gradient: ["#000066", "#6699FF"],
    url: "https://wonofe.vercel.app",
    tech: [
      "react",
      "tailwindcss",
      // "apexcharts",
      "redux",
      "mui",
      "nodejs",
      "mongodb",
      "aws",
      "cloudinary",
    ],
  },
  {
    name: "WoNo Nomads",
    image: "/projects/nomad-main.png",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "WoNo Nomads – An Airbnb-style platform where users can discover and inquire about co-working spaces, co-living options, hostels, and more across emerging destinations.",
    gradient: ["#F14658", "#DC2537"],
    url: "https://nomad.wono.co",
    tech: ["react", "tailwindcss", "redux", "nodejs", "mongodb", "aws"],
  },
];

export const WORK_CONTENTS = {
  WONO: [
    {
      title: "WoNo by BIZNest",
      description:
        "As an Associate Software Engineer, I architected and built highly modular admin dashboards to manage complex SaaS workflows across multiple departments. Transformed early prototypes into production-ready dashboards with seamless API integrations, accessibility compliance, and responsive UI/UX.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Associate Software Engineer
        </div>
      ),
    },
    {
      title: "Performance & Optimization",
      description:
        "Brought page load times from 6–7 seconds down to under 2 seconds, reduced bundle size by ~40%, and implemented caching strategies to deliver near-instant data retrieval. Led architecture-level discussions on micro-frontends, API orchestration, and modularization, turning monolithic code into scalable, maintainable components.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Architecture
        </div>
      ),
    },
    {
      title: "Seamless UX",
      description:
        "Reworked UI flows to improve task completion rates for internal teams by over 30%, ensuring accessibility checks and pixel-perfect responsiveness across devices. Delivered a unified, elegant user experience for all modules.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          UX Enhancements
        </div>
      ),
    },
  ],

  EEJAK: [
    {
      title: "Eejak Technologies",
      description:
        "During my React Internship, I sharpened my frontend engineering skills by transforming static screens into dynamic, API-driven components with error handling, state management, and improved UX.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          React Intern
        </div>
      ),
    },
    {
      title: "Micro-Frontend Initiative",
      description:
        "Contributed to a micro-frontend initiative by modularizing parts of the application, enabling teams to deploy features independently and reduce release cycles. Migrated legacy UI patterns to modern React hooks and context APIs, cutting code duplication by 25% and improving maintainability.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Development
        </div>
      ),
    },
    {
      title: "Feature Delivery",
      description:
        "Quickly moved from making simple UI tweaks to shipping fully integrated features, reducing turnaround time for feature requests significantly and boosting the team’s velocity.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Feature Launch
        </div>
      ),
    },
  ],
};


export const GTAG = "G-5HCTL2TJ5W";
