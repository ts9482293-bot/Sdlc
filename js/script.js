var swiper = new Swiper(".myswiper", {
  //   direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
const swiper2 = new Swiper(".trustslider", {
  loop: true,
  freeMode: true,
  freeModeMomentum: false, // IMPORTANT: stops momentum "jump"
  slidesPerView: "auto",
  spaceBetween: 43,

  speed: 6000, // slow, smooth flow
  autoplay: {
    delay: 0, // no pause
    disableOnInteraction: false,
  },

  allowTouchMove: false, // no user dragging (optional)
});

var swiper3 = new Swiper(".equipment-swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiper4 = new Swiper(".services-swiper", {
  // Optional parameters
  loop: true,
  freeMode: true,
  freeModeMomentum: false,
  slidesPerView: "auto",
  spaceBetween: 43,

  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  allowTouchMove: false,
  spaceBetween: 35,
  slidesPerView: "auto",
});

var swiper5 = new Swiper(".card-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 24,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper6 = new Swiper(".blog-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 33,
  slidesPerView: "auto",
 
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

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
const homebtn = document.querySelectorAll(".home-btn");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    homebtn.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach(bookmark => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");
  });
});

const cards = document.querySelectorAll(".how-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});

Fancybox.bind("[data-fancybox]", {
  Toolbar: true,
  closeButton: "top",
  animated: true,
  dragToClose: true,
  showClass: "fancybox-fadeIn",
  hideClass: "fancybox-fadeOut",
});

VanillaTilt.init(document.querySelector(".mobile-img"), {
    max: 15,
    speed: 400,
    scale: 1.05,
    glare: true,
    "max-glare": 0.2,
  });

AOS.init({
  duration: 1000,
  once: true,
});

luxy.init({
  wrapper: "#luxy",
  targets: ".luxy-el",
  wrapperSpeed: 0.08,
});
