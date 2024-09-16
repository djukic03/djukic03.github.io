import { translations } from "./translation.js";
document.querySelectorAll(".language").forEach((element) => {
  element.addEventListener("change", function () {
    const selectedLang = this.value;
    sessionStorage.setItem("selectedLanguage", selectedLang);
    const translation = translations[selectedLang];

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
    document.querySelector("#text-h2").innerHTML = translation.text_h2;
    document.querySelector("#text-p").innerHTML = translation.text_p;
    document.querySelector("#btn-contact").innerHTML = translation.btn_contact;
    document.querySelector("#currently-working").innerHTML =
      translation.currently_working;
    document.querySelector("#about-me-p1").innerHTML = translation.about_me_p1;
    document.querySelector("#about-me-p2").innerHTML = translation.about_me_p2;
    document.querySelector("#about-me-p3").innerHTML = translation.about_me_p3;
    document.querySelector("#read-cv").innerHTML = translation.read_cv;
    document.querySelector(".view-all").innerHTML = translation.view_all;
    document.querySelector("#ath-x-desc").innerHTML = translation.ath_x_desc;
    document.querySelectorAll(".view-more").forEach((element) => {
      element.innerHTML = translation.view_more;
    });
    document.querySelector("#djuka-title").innerHTML = translation.djuka_title;
    document.querySelector("#djuka-desc").innerHTML = translation.djuka_desc;
    document.querySelector("#portfolio-title").innerHTML =
      translation.portfolio_title;
    document.querySelector("#portfolio-desc").innerHTML =
      translation.portfolio_desc;
    document.querySelector(".my-skills").innerHTML = translation.my_skills;
    document.querySelector("#soft-dev").innerHTML = translation.soft_dev;
    document.querySelector("#web-dev").innerHTML = translation.web_dev;
    document.querySelector("#databases").innerHTML = translation.databases;
    document.querySelector("#tools").innerHTML = translation.tools;
    document.querySelector("#management").innerHTML = translation.management;
    document.querySelector("#pm").innerHTML = translation.pm;
    document.querySelector("#pdm").innerHTML = translation.pdm;
    document.querySelector("#pe").innerHTML = translation.pe;
    document.querySelector("#e").innerHTML = translation.e;
    document.querySelector("#f").innerHTML = translation.f;
    document.querySelector("#contact-text").innerHTML =
      translation.contact_text;
    document.querySelector("#name").placeholder = translation.name;
    document.querySelector("#email").placeholder = translation.email;
    document.querySelector("#subject").placeholder = translation.subject;
    document.querySelector("#message").placeholder = translation.message;
    document.querySelector("#send").innerHTML = translation.send;
    document.querySelector("#or-contact").innerHTML = translation.or_contact;
    document.querySelector("#footer-text").innerHTML = translation.footer_text;
  });
});

window.addEventListener("load", () => {
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
