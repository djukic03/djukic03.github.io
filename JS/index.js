import { translations } from "./translation.js";
document.querySelectorAll(".language").forEach((element) => {
  element.addEventListener("change", function () {
    const selectedLang = this.value;
    const translation = translations[selectedLang];

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

(function () {
  emailjs.init({
    publicKey: "e3-_HYVJTgu2CHAjU",
  });
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("contact_service", "contact_form", this).then(
      () => {
        alert("Email sent successfully");
        document.getElementById("contactForm").reset();
      },
      (error) => {
        alert("Error sending email. Please try again later. \n", error);
      }
    );
  });
