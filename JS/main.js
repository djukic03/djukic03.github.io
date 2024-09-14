import { translations } from "./translation.js";
var LanguageSelect = document.querySelector(".language");
LanguageSelect.addEventListener("change", function () {
  const selectedLang = this.value;
  const translation = translations[selectedLang];

  document.querySelectorAll(".home").forEach((element) => {
    element.innerHTML = translation.home;
  });
  document.querySelectorAll(".about").forEach((element) => {
    element.innerHTML = translation.about;
  });
  document.querySelectorAll(".projects").forEach((element) => {
    element.innerHTML = translation.projects;
  });
  document.querySelectorAll(".contact").forEach((element) => {
    element.innerHTML = translation.contact;
  });
  document.querySelector("#text-h2").innerHTML = translation.text_h2;
  document.querySelector("#text-p").innerHTML = translation.text_p;
  document.querySelector("#btn-contact").innerHTML = translation.btn_contact;
  document.querySelector("#currently-working").innerHTML =
    translation.currently_working;
  document.querySelector("#about-me-p1").innerHTML = translation.about_me_p1;
  document.querySelector("#about-me-p2").innerHTML = translation.about_me_p2;
  document.querySelector("#about-me-p3").innerHTML = translation.about_me_p3;
  document.querySelector("#read-cv").innerHTML = translation.read_cv;
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
