const phone = document.getElementById("phone");
const text = document.getElementById("text");
const link = document.getElementById("link");
const linkInp = document.getElementById("linkInput");
const copyBtn = document.getElementById("copyBtn");

function generate() {
  copyBtn.querySelector("span").innerHTML = "Copy";
  if (phone.value.trim().length == 0 || text.value.trim().length == 0)
    alert("Please fill all fields");
  else {
    link.style.display = "block";
    linkInp.value = `https://wa.me/+91${phone.value.trim()}?text=${encodeURIComponent(
      text.value.trim()
    )}`;
  }
}

function copy() {
  navigator.clipboard.writeText(linkInp.value);
  copyBtn.querySelector("span").innerHTML = "Copied !!";
  copyBtn.classList.add("bg-teal-600");
  copyBtn.classList.add("text-white");
  setTimeout(() => {
    copyBtn.classList.remove("bg-teal-600");
    copyBtn.classList.remove("text-white");
    copyBtn.querySelector("span").innerText = "Copy";
  }, 4000);
}

function gotoLink() {
  phone.value = "";
  text.value = "";
  location.assign(linkInp.value);
}
