function fix() {
  document.getElementById("box").style.display = "block";
  document.getElementById("btn").style.filter = "blur(2px)";
  document.getElementById("btn").style.pointerEvents = "none";
  document.getElementById("progg").addEventListener("animationend", () => {
    document.getElementById("box").style.display = "none";
    document.getElementById("final").style.display = "block";
  });
}

function resett() {
  document.getElementById("box").style.display = "none";
  document.getElementById("btn").style.filter = "none";
  document.getElementById("btn").style.pointerEvents = "all";
  document.getElementById("final").style.display = "none";
}
