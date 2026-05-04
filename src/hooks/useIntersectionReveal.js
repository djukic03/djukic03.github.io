import { useEffect } from "react";

export function useIntersectionReveal(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);
}
