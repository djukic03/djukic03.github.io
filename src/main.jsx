import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../CSS/main.css";
import "../CSS/index.css";
import "../CSS/about.css";
import "../CSS/projects.css";
import "./styles/contact.css";
import { App } from "./App";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
