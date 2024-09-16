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
