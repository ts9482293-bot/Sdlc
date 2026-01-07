AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
});

// nav-link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// counter
const counters = document.querySelectorAll(".counter");
const speed = 200; // lower = faster

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
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

  let lastScrollTop = 0;
  const navbar = document.querySelector(".header-sec");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // scrolling down
      navbar.classList.add("nav-hide");
    } else {
      // scrolling up
      navbar.classList.remove("nav-hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // If everything is valid
  if (isValid) {
    console.log("Form submitted successfully!");
    form.reset(); // optional
  }
});

Fancybox.bind("[data-fancybox]", {
  placeFocusBack: false,
  trapFocus: false,
  iframe: {
    preload: false,
  },
});
