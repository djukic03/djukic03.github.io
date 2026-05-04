import { useLanguage } from "../../context/LanguageContext";
import { icons } from "../../data/assets";
import { profile } from "../../data/profile";
import { useContactForm } from "../../hooks/useContactForm";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionTitle } from "../ui/SectionTitle";

function ContactForm() {
  const { t } = useLanguage();
  const { formRef, handleSubmit, isSending } = useContactForm();

  return (
    <div className="contact-form">
      <p id="contact-text">{t.contact.intro}</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="row">
            <input type="text" name="name" id="name" placeholder={t.contact.name} required />
            <input type="email" name="email" id="email" placeholder={t.contact.email} required />
          </div>
          <input type="text" name="subject" id="subject" placeholder={t.contact.subject} required />
          <textarea name="message" id="message" placeholder={t.contact.message} required />
          <button className="btn" id="send" type="submit" disabled={isSending}>
            {isSending ? t.contact.sending : t.contact.send}
          </button>
        </div>
      </form>
    </div>
  );
}

function ContactDetails() {
  const { language, t } = useLanguage();
  const linkedinLabel = language === "sr" ? "Немања Ђукић" : "Nemanja Đukić";

  return (
    <div className="media">
      <p id="or-contact" style={{ fontWeight: 600, marginBottom: "20px" }}>
        {t.contact.orContact}
      </p>
      <div className="row">
        <img src={icons.email} alt="Email" />
        <p>{profile.email}</p>
      </div>
      <div className="row">
        <img src={icons.linkedin} alt="LinkedIn" />
        <p>{linkedinLabel}</p>
      </div>
      <div className="row">
        <img src={icons.phone} alt="Phone" />
        <p>{profile.phoneDisplay}</p>
      </div>
    </div>
  );
}

function ContactSocials() {
  const { t } = useLanguage();

  return (
    <div className="contact-socials">
      <div className="social-card">
        <p>{t.contact.socials}</p>
        <div className="social-icons-row">
          {profile.socialLinks.map((social) => (
            <ExternalLink key={social.id} href={social.href} ariaLabel={social.label}>
              <img src={social.icon} alt={social.label} />
            </ExternalLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContactSection({ page = false }) {
  const { t } = useLanguage();

  return (
    <div className={`contact-section${page ? " contact-section-page" : ""}`}>
      <SectionTitle className="contact" label={page ? t.contact.pageTitle : t.contact.title} />
      <div
        className="row contact-content-row"
        style={{ justifyContent: "space-between", width: "100%", height: "100%", alignItems: "flex-start" }}
      >
        <ContactForm />
        {page ? (
          <ContactSocials />
        ) : (
          <div className="media-info">
            <ContactDetails />
          </div>
        )}
      </div>
    </div>
  );
}
