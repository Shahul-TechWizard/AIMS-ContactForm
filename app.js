const inputs = document.querySelectorAll(".input");

const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

app.get("/proxy", async (req, res) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyXuNxMKrg3ynTribAAcjU_nTiKavACpwLcpCCts2oEsBqp58csJPkl0NEkORQEf7HC/exec";
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



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
  "https://script.google.com/macros/s/AKfycbyXuNxMKrg3ynTribAAcjU_nTiKavACpwLcpCCts2oEsBqp58csJPkl0NEkORQEf7HC/exec";

// var submissionDateTime = new Date().toLocaleString();
// document.getElementById("submissionDateTime").value = submissionDateTime;
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  // var submissionDateTime = new Date().toLocaleString();
  // document.getElementById("Timestamp").value = submissionDateTime;
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    // .then(() => {
    //   window.location.reload();
    // })
    .catch((error) => console.error("Error!", error.message));
  // alert("Thank you! your form is submitted successfully.");
});
