/**
 * Update the displayed interest rate when the range input changes.
 */
function updateRate() {
  const rate = parseFloat(document.getElementById("rate").value).toFixed(2);
  document.getElementById("rate_val").innerText = rate + "%";
}

/**
 * Display an error message in the span identified by `id`.
 */
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

/**
 * Clear all error messages.
 */
function clearErrors() {
  document.querySelectorAll(".error").forEach((span) => (span.textContent = ""));
}

/**
 * Calculate and display the interest based on user input.
 */
function compute() {
  // Retrieve input elements
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const timeInput = document.getElementById("time");
  const currency = document.getElementById("currency").value;
  const interestType = document.querySelector(
    'input[name="interestType"]:checked'
  ).value;

  clearErrors();

  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(rateInput.value);
  const time = parseInt(timeInput.value, 10);

  // Validate inputs
  let valid = true;
  if (isNaN(principal) || principal <= 0) {
    showError("principal-error", "Enter a positive amount");
    principalInput.focus();
    valid = false;
  }
  if (isNaN(rate) || rate <= 0) {
    showError("rate-error", "Enter a positive rate");
    if (valid) rateInput.focus();
    valid = false;
  }
  if (isNaN(time) || time <= 0) {
    showError("time-error", "Select a time period");
    if (valid) timeInput.focus();
    valid = false;
  }
  if (!valid) return;

  // Perform the chosen calculation
  let interest;
  if (interestType === "compound") {
    interest = principal * Math.pow(1 + rate / 100, time) - principal;
  } else {
    interest = (principal * rate * time) / 100;
  }
  const year = new Date().getFullYear() + time;

  // Display the result
  const result =
    `If you deposit <span>${currency}${principal}</span>,<br>` +
    `at an interest of <span>${rate}%</span>.<br>` +
    `You will receive an amount of <span>${currency}${interest.toFixed(2)}</span>,<br>` +
    `in the year <span>${year}</span>.`;
  document.getElementById("result").innerHTML = result;
}

/**
 * Reset the form fields and clear the result area.
 */
function resetForm() {
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "10.25";
  updateRate();
  document.getElementById("time").value = "1";
  document.getElementById("currency").value = "$";
  document.querySelector('input[name="interestType"][value="simple"]').checked = true;
  document.getElementById("result").innerHTML = "";
  clearErrors();
}

