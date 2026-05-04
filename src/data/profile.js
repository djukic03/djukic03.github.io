import { documents, icons } from "./assets";

export const profile = {
  name: {
    en: "Nemanja Đukić",
    sr: "Немања Ђукић",
  },
  shortName: {
    en: "Nemanja",
    sr: "Немања",
  },
  email: "djukic.nemanja003@gmail.com",
  phone: "+381637412291",
  phoneDisplay: "+381/63-741-2291",
  cvUrl: documents.cv,
  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/djukic03",
      icon: icons.github,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nemanja-%C4%91uki%C4%87/",
      icon: icons.linkedin,
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:djukic.nemanja003@gmail.com",
      icon: icons.email,
    },
  ],
};
