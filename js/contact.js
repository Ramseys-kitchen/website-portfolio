const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      feedback.textContent = "All fields are required.";
      feedback.style.color = "red";
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      feedback.textContent = "Enter a valid email address.";
      feedback.style.color = "red";
      return;
    }
    feedback.textContent = "✓ Thanks! (Demo – no actual email sent)";
    feedback.style.color = "green";
    form.reset();
  });
}