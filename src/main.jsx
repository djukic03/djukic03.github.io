import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "../CSS/main.css";
import "../CSS/index.css";
import "../CSS/about.css";
import "../CSS/projects.css";
import "./styles/contact.css";
import { App } from "./App";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
);
