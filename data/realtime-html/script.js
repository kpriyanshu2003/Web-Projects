const input = document.querySelector("#input");
const output = document.querySelector("#output_window");

output.innerHTML = input.value;
input.addEventListener("input", () => {
  output.innerHTML = input.value;
});
