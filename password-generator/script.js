// Functions

function generate() {
  document.getElementById("btn-copy").innerText = "Copy Password";
}

function copy() {
  var copyText = document.getElementById("output");
  if (copyText == "") alert("Enter a text");
  else {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    console.log("");
    document.getElementById("btn-copy").innerText = "Copied to Clipboard";
  }
}

// Event Listeners

document.getElementById("easy_say").addEventListener("click", () => {
  document.getElementById("number").disabled = true;
  document.getElementById("symbol").disabled = true;
});

document.getElementById("easy_read").addEventListener("click", () => {
  document.getElementById("number").disabled = false;
  document.getElementById("symbol").disabled = false;
});

document.getElementById("all").addEventListener("click", () => {
  document.getElementById("number").disabled = false;
  document.getElementById("symbol").disabled = false;
});

document.getElementById("output").addEventListener("change", () => {
  document.getElementById("btn-copy").innerText = "Copy Password";
});
