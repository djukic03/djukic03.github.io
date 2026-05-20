import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../data/profile";
import { getLocalized } from "../../utils/getLocalized";
import { ExternalLink } from "../ui/ExternalLink";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer>
      <div className="row" style={{ alignItems: "flex-start" }}>
        <div className="name">
          <div className="row" style={{ justifyContent: "flex-start" }}>
            <p>{getLocalized(profile.shortName, language)}</p>
            <ExternalLink href={`mailto:${profile.email}`}>{profile.email}</ExternalLink>
          </div>
          <p id="footer-text" style={{ marginTop: "10px" }}>
            {t.common.footerText}
          </p>
        </div>

        <div className="media">
          <p>{t.common.media}</p>
          <div className="row">
            {profile.socialLinks.map((social) => (
              <ExternalLink key={social.id} href={social.href} ariaLabel={social.label}>
                <img src={social.icon} alt={social.label} />
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
      <p style={{ marginTop: "50px", color: "#ABB2BF" }}>
        Copyright  © 2024 {getLocalized(profile.name, language)}
      </p>
    </footer>
  );
}
