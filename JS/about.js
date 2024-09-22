import { translations } from "./translation.js";
document.querySelectorAll(".language").forEach((element) => {
  element.addEventListener("change", function () {
    const selectedLang = this.value;
    const translation = translations[selectedLang];

    document.querySelector("#download-cv").innerHTML = translation.download_cv;
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".left-experience").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".right-experience").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".white-circle").forEach((element) => {
  observer.observe(element);
});
