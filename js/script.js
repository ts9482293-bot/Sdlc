var swiper = new Swiper(".myswiper", {
  //   direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
     pauseOnMouseEnter: true,
  },
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
     pauseOnMouseEnter: true,
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
     pauseOnMouseEnter: true,
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
     pauseOnMouseEnter: true,
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
     pauseOnMouseEnter: true,
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
     pauseOnMouseEnter: true,
  },
});


document.getElementById("modalform").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("modal-email").value.trim();
  const password = document.getElementById("modal-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const address = document.getElementById("address").value.trim();

  // Clear errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let isValid = true;

  if (!email) {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    isValid = false;
  }

  if (!address) {
    document.getElementById("addressError").textContent =
      "Address is required";
    isValid = false;
  }

  if (isValid) {
    alert("Account created successfully ✅");
    // this.submit(); // enable when backend is ready
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

// splash-screen
window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("splash-screen").style.opacity = "0";
      document.getElementById("splash-screen").style.transition = "0.8s";
      setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
      }, 800);
    }, 3000);
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

//  const openText = document.getElementById("openText");
//   const todayStatus = document.getElementById("todayStatus");

//   const now = new Date();
//   const hour = now.getHours();
//   const day = now.getDay(); // 0 = Sunday

//   let isOpen = false;

//   if (day >= 1 && day <= 5) {
//     isOpen = hour >= 9 && hour < 22;
//   } else if (day === 6) {
//     isOpen = hour >= 9 && hour < 20;
//   }

//   if (isOpen) {
//     openText.textContent = "Open Now • Closes at 10 PM";
//     todayStatus.innerHTML = "🟢 We are open right now";
//   } else {
//     openText.textContent = "Closed • Opens at 9 AM";
//     todayStatus.innerHTML = "🔴 We are currently closed";
//   }

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

luxy.init({
  wrapper: "#luxy",
  targets: ".luxy-el",
  wrapperSpeed: 0.08,
});
