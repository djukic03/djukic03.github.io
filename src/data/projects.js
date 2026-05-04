import { images } from "./assets";

export const featuredProjectIds = ["car-sales-tracker", "chat-app", "athlete-x"];

export const projectCategories = [
  {
    id: "academic",
    titleKey: "academicProjects",
  },
  {
    id: "personal",
    titleKey: "personalProjects",
  },
];

export const projects = [
  {
    id: "chat-app",
    category: "academic",
    image: images.chatApp,
    imageAlt: "Chat Application",
    technologies: ["PHP", "Laravel", "TypeScript", "React"],
    title: {
      en: "Chat Application",
      sr: "Апликација за ћаскање",
    },
    description: {
      en: "Real-time chat web application.",
      sr: "Веб апликација за ћаскање у реалном времену.",
    },
  },
  {
    id: "car-sales-tracker",
    category: "academic",
    image: images.carSalesTracker,
    imageAlt: "Car Sales Tracker",
    technologies: ["Java", "Swing", "MySQL"],
    title: {
      en: "Car Sales Tracker",
      sr: "Праћење продаје аутомобила",
    },
    description: {
      en: "Client-server application for tracking car sales.",
      sr: "Клијент-сервер апликација за праћење продаје аутомобила.",
    },
  },
  {
    id: "athlete-x",
    category: "academic",
    image: images.athleteX,
    imageAlt: "Athlete X",
    technologies: ["HTML", "CSS", "TypeScript", "React", "Node.js"],
    title: {
      en: "Athlete X",
      sr: "Athlete X",
    },
    description: {
      en: "Fitness tracking web application.",
      sr: "Веб апликација за праћење фитнес активности.",
    },
  },
  {
    id: "djuka-music-assistant",
    category: "academic",
    image: images.djukaMusicAssistant,
    imageAlt: "Đuka Music Assistant",
    technologies: ["Python"],
    title: {
      en: "Đuka Music Assistant",
      sr: "Ђука музички асистент",
    },
    description: {
      en: "Voice-controlled music assistant.",
      sr: "Музички асистент са гласовним командама.",
    },
    borderedImage: true,
  },
  {
    id: "taverna-san",
    category: "academic",
    image: images.tavernaSan,
    imageAlt: "Taverna SAN",
    technologies: ["HTML", "CSS", "JavaScript"],
    title: {
      en: "Taverna SAN website",
      sr: "Taverna SAN веб-сајт",
    },
    description: {
      en: "Webpage for imaginary restaurant Taverna SAN.",
      sr: "Веб-страница за замишљени ресторан Taverna SAN.",
    },
    borderedImage: true,
  },
  {
    id: "opentdb-mini-visualization-tool",
    category: "personal",
    image: images.openTdbVisualization,
    imageAlt: "OpenTDB Mini Visualization Tool",
    technologies: ["TypeScript", "React"],
    title: {
      en: "OpenTDB Mini Visualization Tool",
      sr: "OpenTDB Mini Visualization Tool",
    },
    description: {
      en: "Visualization tool for the OpenTDB API made for a JetBrains internship task.",
      sr: "Алат за визуелизацију OpenTDB API података направљен за JetBrains праксу.",
    },
  },
  {
    id: "e-moderator",
    category: "personal",
    image: images.eModerator,
    imageAlt: "E-moderator",
    technologies: ["Node.js", "Express", "TypeScript", "React"],
    title: {
      en: "E-moderator",
      sr: "E-moderator",
    },
    description: {
      en: "Web application for moderating digital activities and workflows.",
      sr: "Веб апликација за модерирање дигиталних активности и токова рада.",
    },
  },
  {
    id: "guess-the-island",
    category: "personal",
    image: images.guessTheIsland,
    imageAlt: "Guess The Island",
    technologies: ["TypeScript", "React", "Node.js", "Express"],
    title: {
      en: "Guess The Island",
      sr: "Guess The Island",
    },
    description: {
      en: "Dockerized web game made for the Nordeus full-stack challenge.",
      sr: "Докеризована веб игра направљена за Nordeus full-stack изазов.",
    },
  },
  {
    id: "portfolio-website",
    category: "personal",
    image: images.portfolioWebsite,
    imageAlt: "Portfolio Website",
    technologies: ["React", "CSS", "JavaScript"],
    title: {
      en: "My Portfolio Website",
      sr: "Мој портфолио веб-сајт",
    },
    description: {
      en: "A custom-made website built from scratch.",
      sr: "Персонализован веб-сајт израђен од нуле.",
    },
    borderedImage: true,
  },
];
