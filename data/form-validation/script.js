const input = document.querySelectorAll("input");
let errN = 1;

function submitLogin(e) {
  e.preventDefault();
  console.clear();
  errN ? alert("Thanks for Logging In") : "";
}
function submitSignUp(e) {
  e.preventDefault();
  console.clear();
  console.log("Form Submission");
  dataEntered();
  console.log("Checking Passwords and Radio");
  if (
    input[4].value === input[5].value &&
    input[4].value.length > 0 &&
    input[5].value.length > 0
  ) {
    console.log("Passwords Matched");
    changeBorder(1);
    errN = 1;
  } else {
    console.log("Password Error");
    changeBorder(0);
    errN = 0;
    alert("Passwords Do Not Match.");
  }
  if (input[6].checked || input[7].checked)
    console.log("Radio Checked", (errN = 1));
  else {
    console.log("Radio Uncheck");
    alert("Please select your gender");
    errN = 0;
  }
  console.log("Successfully Submitted form");
  errN ? alert("Thank You For Signing Up.") : "";
}

function dataEntered() {
  console.log("FullName : " + input[0].value);
  console.log("Phone Number : " + input[1].value);
  console.log("Username : " + input[2].value);
  console.log("Email : " + input[3].value);
  console.log("Password : " + input[4].value);
  console.log("Confirm Password : " + input[5].value);
  console.log(
    "Gender: Male " + input[6].checked + " Female : " + input[7].checked
  );
  console.log("\n");
}

function changeBorder(a) {
  if (a) {
    input[4].style.border = "none";
    input[5].style.border = "none";
    input[4].style.borderBottom = "1px solid grey";
    input[5].style.borderBottom = "1px solid grey";
  } else {
    input[4].style.border = "1px solid rgba(255, 0, 0, 0.682)";
    input[5].style.border = "1px solid rgba(255, 0, 0, 0.682)";
  }
}
