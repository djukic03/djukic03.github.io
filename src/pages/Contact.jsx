import { ContactSection } from "../components/sections/ContactSection";
import { PageTitle } from "../components/ui/PageTitle";
import { useLanguage } from "../context/LanguageContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Contact() {
  const { t } = useLanguage();
  useDocumentTitle(t.contact.documentTitle);

  return (
    <>
      <PageTitle className="contact" title={t.contact.pageTitle} />
      <ContactSection page />
    </>
  );
}
