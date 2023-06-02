const btn = document.getElementById("btn");
var count = 0;
btn.innerText = count;
btn.addEventListener("click", () => {
  count++;
  btn.innerText = count;
});
