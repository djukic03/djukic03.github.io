import { Outlet, useLocation } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";

const pageClassNames = {
  "/": "home-page",
  "/about": "about-page",
  "/projects": "projects-page",
  "/contact": "contact-page",
};

export function Layout() {
  const { pathname } = useLocation();
  useScrollToTop();
  const pageClassName =
    pageClassNames[pathname] ?? (pathname.startsWith("/projects/") ? "project-detail-page" : "home-page");

  return (
    <>
      <Header />
      <main className={`content ${pageClassName}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
