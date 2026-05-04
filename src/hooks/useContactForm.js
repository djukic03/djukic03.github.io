import emailjs from "@emailjs/browser";
import { useCallback, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "e3-_HYVJTgu2CHAjU";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "contact_service";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "contact_form";

export function useContactForm() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (!formRef.current || isSending) {
        return;
      }

      setIsSending(true);

      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY,
        );
        window.alert(t.contact.success);
        formRef.current.reset();
      } catch (error) {
        console.error("EmailJS error:", error);
        window.alert(t.contact.error);
      } finally {
        setIsSending(false);
      }
    },
    [isSending, t.contact.error, t.contact.success],
  );

  return {
    formRef,
    handleSubmit,
    isSending,
  };
}
