inputt = document.getElementsByTagName("input");
labell = document.getElementsByTagName("label");
buttonn = document.getElementsByTagName("button");
svgg = document.getElementsByTagName("svg");

svgg[0].addEventListener("mouseover", () => {
  document.getElementById("uno").style.display = "block";
});

svgg[0].addEventListener("mouseleave", () => {
  document.getElementById("uno").style.display = "none";
});

svgg[1].addEventListener("mouseover", () => {
  document.getElementById("dos").style.display = "block";
});

svgg[1].addEventListener("mouseleave", () => {
  document.getElementById("dos").style.display = "none";
});

svgg[2].addEventListener("mouseover", () => {
  document.getElementById("tres").style.display = "block";
});

svgg[2].addEventListener("mouseleave", () => {
  document.getElementById("tres").style.display = "none";
});

inputt[1].addEventListener("change", () => {
  inputt[2].value = inputt[1].value;
});

inputt[2].addEventListener("mousemove", () => {
  inputt[1].value = inputt[2].value;
});

inputt[3].addEventListener("change", function x() {
  disabled(1);
  checked(0);
  colorr("gray");
});

inputt[4].addEventListener("change", () => {
  disabled(0);
  colorr("black");
});

inputt[5].addEventListener("change", () => {
  disabled(0);
  checked(1);
  colorr("black");
});

window.addEventListener("load", () => {
  disabled(1);
  checked(0);
  colorr("gray");
});

function colorr(c) {
  labell[5].style.color = c;
  labell[6].style.color = c;
}
function disabled(n) {
  inputt[9].disabled = n;
  inputt[8].disabled = n;
}
function checked(n) {
  inputt[8].checked = n;
  inputt[9].checked = n;
}

function generate() {
  var charset = "";
  if (inputt[6].checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (inputt[7].checked) charset += "abcdefghijklmnopqrstuvwxyz";
  if (inputt[8].checked) charset += "1234567890";
  if (inputt[9].checked) charset += "!@#$%^&*()-_+=[]{}|;:,.<>/?~";
  if (inputt[4].checked) {
    charset = charset.replaceAll("1", "");
    charset = charset.replaceAll("0", "");
    charset = charset.replaceAll("O", "");
    charset = charset.replaceAll("l", "");
    charset = charset.replaceAll("I", "");
    charset = charset.replaceAll("!", "");
    charset = charset.replaceAll("|", "");
    charset = charset.replaceAll("i", "");
    charset = charset.replaceAll("C", "");
    charset = charset.replaceAll("(", "");
  }
  var password = "";
  for (var i = 0; i < inputt[1].value; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  document.getElementById("output").value = password;
}

function copy() {
  navigator.clipboard.writeText(inputt[0].value);
  buttonn[0].innerText = "Copied !";
  setTimeout(() => {
    buttonn[0].innerText = "Copy";
  }, 2000);
}
