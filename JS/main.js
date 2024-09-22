import { translations } from "./translation.js";
document.querySelectorAll(".language").forEach((element) => {
  element.addEventListener("change", function () {
    const selectedLang = this.value;
    sessionStorage.setItem("selectedLanguage", selectedLang);
    const translation = translations[selectedLang];

    document.querySelector("#profile").innerHTML = translation.profile;
    document.querySelectorAll(".home").forEach((element) => {
      element.innerHTML = translation.home;
    });
    document.querySelectorAll(".about").forEach((element) => {
      element.innerHTML = translation.about;
    });
    document.querySelectorAll(".my-projects").forEach((element) => {
      element.innerHTML = translation.projects;
    });
    document.querySelectorAll(".contact").forEach((element) => {
      element.innerHTML = translation.contact;
    });
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  document.querySelectorAll(".language").forEach((element) => {
    const selectedLang = sessionStorage.getItem("selectedLanguage");
    if (selectedLang) {
      element.value = selectedLang;
      element.dispatchEvent(new Event("change"));
    }
  });
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
