const registrationForm = document.querySelector(".auth-form");

if (registrationForm) {
  const password = document.querySelector("#reg-password");
  const confirmation = document.querySelector("#confirm-password");

  function validatePasswordMatch() {
    confirmation.setCustomValidity(
      confirmation.value && confirmation.value !== password.value
        ? "Passwords do not match."
        : "",
    );
  }

  password.addEventListener("input", validatePasswordMatch);
  confirmation.addEventListener("input", validatePasswordMatch);
  registrationForm.addEventListener("submit", (event) => {
    validatePasswordMatch();
    if (!registrationForm.reportValidity()) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    window.location.href = document.querySelector("#user-type").value;
  });
}
