import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";
import { getLocalized } from "../../utils/getLocalized";
import { ExternalLink } from "../ui/ExternalLink";
import { LanguageSelect } from "./LanguageSelect";

function SocialLinks({ className }) {
  return (
    <div className={className}>
      {profile.socialLinks.map((social) => (
        <ExternalLink key={social.id} href={social.href} ariaLabel={social.label}>
          <img src={social.icon} alt={social.label} />
        </ExternalLink>
      ))}
    </div>
  );
}

function NavItems({ onNavigate }) {
  const { t } = useLanguage();
  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/projects", label: t.nav.projects },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      {navItems.map((item) => (
        <li className="nav-li" key={item.to}>
          <p className="hash">#</p>
          <NavLink to={item.to} onClick={onNavigate}>
            {item.label}
          </NavLink>
        </li>
      ))}
      <li className="nav-li">
        <LanguageSelect />
      </li>
    </>
  );
}

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { language } = useLanguage();

  const closeMobileNav = () => setIsMobileOpen(false);

  return (
    <header className="navbar">
      <div className="row" id="navbar-row">
        <div className="line-and-links">
          <div className="line" />
          <SocialLinks className="links" />
        </div>

        <Link to="/" id="profile" onClick={closeMobileNav}>
          {getLocalized(profile.name, language)}
        </Link>

        <ul className="desktop-nav">
          <NavItems />
        </ul>

        <button
          className={`mobile-nav${isMobileOpen ? " open" : ""}`}
          type="button"
          onClick={() => setIsMobileOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
        >
          <div className="line-one" />
          <div className="line-two" />
        </button>
      </div>

      <div className={`mobile-nav-container${isMobileOpen ? " show" : ""}`}>
        <ul className="mobile-nav-ul">
          <NavItems onNavigate={closeMobileNav} />
        </ul>
        <SocialLinks className="mobile-links" />
      </div>
    </header>
  );
}
