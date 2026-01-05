var swiper = new Swiper(".swiper", {
  //   direction: "vertical",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 39,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const form = document.getElementById("modalform");
  const emailInput = document.getElementById("modal-email");
  const passwordInput = document.getElementById("modal-password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form submission

    let isValid = true;

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email validation
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Enter a valid email address";
      isValid = false;
    }

    // Password validation
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    } else if (passwordValue.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      isValid = false;
    }

    // If everything is valid
    if (isValid) {
      console.log("Form submitted successfully!");
      form.reset(); // optional
    }
  });


  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 120
  });