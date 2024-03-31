const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzawg7BGsyNJXJT8d8ZErb13VHvtNlYgSzhUm9mz4O62ZQ-kqsIML94yB3o1e1thk9f/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    // .then(() => {
    //   window.location.reload();
    // })
    .catch((error) => console.error("Error!", error.message));

  var submissionDateTime = new Date().toLocaleString();
  document.getElementById("Timestamp").value = submissionDateTime;
});
