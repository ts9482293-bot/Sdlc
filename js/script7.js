  document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // remove old errors
    document.querySelectorAll(".error").forEach(err => err.remove());

    let valid = true;

    const showError = (input, message) => {
      const error = document.createElement("small");
      error.className = "error";
      error.innerText = message;
      input.parentElement.appendChild(error);
      valid = false;
    };

    // inputs
    const email = document.getElementById("checkout-email");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const country = document.getElementById("country");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const pincode = document.getElementById("pincode");
    const phone = document.getElementById("phone");
    const slot = document.getElementById("slot");
    const terms = document.getElementById("terms");

    // email
    if (!email.value.trim()) {
      showError(email, "Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      showError(email, "Enter a valid email");
    }

    // names
    if (!fname.value.trim()) showError(fname, "First name required");
    if (!lname.value.trim()) showError(lname, "Last name required");

    // address
    if (!country.value.trim()) showError(country, "Country required");
    if (!address.value.trim()) showError(address, "Address required");
    if (!city.value.trim()) showError(city, "City required");
    if (!state.value.trim()) showError(state, "State required");

    // pincode (India)
    if (!/^\d{6}$/.test(pincode.value)) {
      showError(pincode, "Enter valid 6-digit pincode");
    }

    // phone
    if (!/^\d{10}$/.test(phone.value)) {
      showError(phone, "Enter valid 10-digit phone number");
    }

    // slot
    if (!slot.value) showError(slot, "Please select a slot time");

    // payment
    const payment = document.querySelector('input[name="payment"]:checked');
    if (!payment) {
      alert("Please select a payment method");
      valid = false;
    }

    // terms
    if (!terms.checked) {
      alert("Please accept Terms & Conditions");
      valid = false;
    }

    // final
    if (valid) {
      alert("Checkout form validated successfully ✅");
      // form.submit(); // enable when backend is ready
    }
  });
});

AOS.init({
    duration: 1000,   // animation duration (ms)
    easing: "ease-in-out",
    once: true,       // animation happens only once
    offset: 120       // trigger distance
  });
