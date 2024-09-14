import { translations } from "./translation.js";
var LanguageSelect = document.querySelector(".language");
LanguageSelect.addEventListener("change", function () {
  const selectedLang = this.value;
  const translation = translations[selectedLang];

  document.querySelector(".home").textContent = translation.home;
  document.querySelector(".about").textContent = translation.about;
});

var MobileNav = document.querySelector(".mobile-nav");

MobileNav.addEventListener("click", function () {
  var x = document.querySelector(".mobile-nav-container");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    setTimeout(() => {
      x.classList.add("show");
    }, 10);
  } else {
    x.classList.remove("show");
    setTimeout(() => {
      x.style.display = "none";
    }, 500);
  }

  var lineOne = document.querySelector(".line-one");
  var lineTwo = document.querySelector(".line-two");
  if (lineOne.style.transform === "rotate(-45deg)") {
    lineOne.style.transform = "rotate(0deg)";
    lineOne.style.width = "50px";
    lineOne.style.marginBottom = "12px";
    lineTwo.style.transform = "rotate(0deg)";
  } else {
    lineOne.style.transform = "rotate(-45deg)";
    lineOne.style.width = "35px";
    lineOne.style.marginBottom = "0";
    lineTwo.style.transform = "rotate(45deg)";
  }
});
