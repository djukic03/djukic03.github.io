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

  return (
    <>
      <Header />
      <main className={`content ${pageClassNames[pathname] ?? "home-page"}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
