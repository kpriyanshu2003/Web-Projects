const text = document.getElementById("countspinner_text");
const spinner = document.getElementById("countspinner");

spinner.classList.add("active");

text.addEventListener("input", () => {
  spinner.classList.add("active");
  setTimeout(() => {
    spinner.classList.remove("active");
  }, parseInt(text.innerText) * 1000);
});

setTimeout(() => {
  spinner.classList.remove("active");
}, parseInt(text.innerText) * 1000);
