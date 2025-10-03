document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Select form and feedback div
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Step 2: Add event listener to form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from actually submitting

    // Step 3: Retrieve and trim inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Step 4: Validation setup
    let isValid = true;
    const messages = [];

    // Step 5: Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Step 6: Email validation (basic check for "@" and ".")
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Step 7: Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Step 8: Display feedback
    feedbackDiv.style.display = "block"; // Show the feedback box

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Green
      feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // Red
      feedbackDiv.style.backgroundColor = "#f8d7da"; // Light red background
    }
  });
});
