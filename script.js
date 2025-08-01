document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Character counter setup
  const maxChars = 500;
  const charCounter = document.createElement("div");
  charCounter.setAttribute("aria-live", "polite");
  charCounter.classList.add("char-counter");
  charCounter.textContent = `${maxChars} characters remaining`;
  messageInput.parentNode.appendChild(charCounter);

  messageInput.addEventListener("input", () => {
    const remaining = maxChars - messageInput.value.length;
    charCounter.textContent = `${remaining} characters remaining`;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Remove old error messages
    form.querySelectorAll(".error-msg").forEach(el => el.remove());

    let hasError = false;

    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required.");
      hasError = true;
    }

    if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
      showError(emailInput, "Please enter a valid email.");
      hasError = true;
    }

    if (!messageInput.value.trim()) {
      showError(messageInput, "Message cannot be empty.");
      hasError = true;
    }

    if (!hasError) {
      alert("Thank you for your message!");
      form.reset();
      charCounter.textContent = `${maxChars} characters remaining`;
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.textContent = message;
    error.classList.add("error-msg");
    input.parentNode.appendChild(error);
  }
});