

 Fancybox.bind("[data-fancybox]", {
    Toolbar: true,
    dragToClose: false,
  });


  document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("form-email");
  const phone = document.getElementById("phone");
  const terms = document.getElementById("terms");

  clearErrors();

  // Name
  if (name.value.trim() === "") {
    setError(name, "Name is required");
    valid = false;
  } else {
    setSuccess(name);
  }

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError(email, "Enter a valid email");
    valid = false;
  } else {
    setSuccess(email);
  }

  // Phone
  if (!/^[0-9]{10,15}$/.test(phone.value)) {
    setError(phone, "Enter valid phone number");
    valid = false;
  } else {
    setSuccess(phone);
  }

  // Checkbox
  if (!terms.checked) {
    document.getElementById("termsError").innerText =
      "You must agree to the terms";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully ✅");
    this.reset();
    clearBorders();
  }
});

function setError(input, message) {
  input.classList.add("error-border");
  input.nextElementSibling.innerText = message;
}

function setSuccess(input) {
  input.classList.add("success-border");
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.innerText = "");
  clearBorders();
}

function clearBorders() {
  document.querySelectorAll("input").forEach(input => {
    input.classList.remove("error-border", "success-border");
  });
}

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
    duration: 1000,   // animation duration
    easing: "ease-in-out",
    once: true,       // animate only once
    offset: 120       // trigger distance
  });