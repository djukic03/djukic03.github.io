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
    githubUrl: "https://github.com/elab-development/serverske-veb-tehnologije-2024-25-chataplikacija_2022_0129",
    demoUrl: "",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
    githubUrl: "https://github.com/djukic03/car-sales-tracker",
    demoUrl: "",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
    githubUrl: "https://github.com/djukic03/cloud-seminarski",
    demoUrl: "",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
    githubUrl: "https://github.com/djukic03/music-assistant",
    demoUrl: "",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
    githubUrl: "https://github.com/djukic03/TavernaSAN",
    demoUrl: "https://djukic03.github.io/TavernaSAN/",
    details: {
      en: [],
      sr: [],
    },
    media: [],
    borderedImage: true,
  },
  {
    id: "birthday-card",
    category: "personal",
    image: images.birthdayCard,
    imageAlt: "Birthday Card",
    technologies: ["Next.js", "React", "TypeScript"],
    title: {
      en: "Birthday Card",
      sr: "Birthday Card",
    },
    description: {
      en: "A small birthday card app I built for my mom's birthday.",
      sr: "Mala rodjendanska cestitka koju sam napravio za mamin rodjendan.",
    },
    githubUrl: "https://github.com/djukic03/birthday-card",
    demoUrl: "https://birthday-card-eight-lyart.vercel.app/",
    details: {
      en: [],
      sr: [],
    },
    media: [],
  },
  {
    id: "canepanion",
    category: "personal",
    image: images.canepanion,
    imageAlt: "CanePanion",
    technologies: ["Kotlin"],
    title: {
      en: "CanePanion",
      sr: "CanePanion",
    },
    description: {
      en: "IoT system providing city guidance for visually impaired people. Hackathon project - 2nd place.",
      sr: "IoT sistem za gradsko navodjenje osoba sa ostecenim vidom. Hackathon projekat - 2. mesto.",
    },
    githubUrl: "https://github.com/djukic03/CanePanion",
    demoUrl: "",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
    githubUrl: "https://github.com/djukic03/opentdb-mini-visualization-tool",
    demoUrl: "https://djukic03.github.io/opentdb-mini-visualization-tool/",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
    githubUrl: "https://github.com/djukic03/e-moderator",
    demoUrl: "https://e-moderator-front.vercel.app/",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
    githubUrl: "https://github.com/djukic03/guess-the-island",
    demoUrl: "",
    details: {
      en: [],
      sr: [],
    },
    media: [],
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
      en: "You are using it right now.",
      sr: "Управо га користите.",
    },
    githubUrl: "https://github.com/djukic03/djukic03.github.io",
    demoUrl: "",
    details: {
      en: [],
      sr: [],
    },
    media: [],
    borderedImage: true,
  },
];
