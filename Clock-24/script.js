setInterval(function timee() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  document.getElementById("root").innerHTML = h + " : " + m + " : " + s;
}, 1000);
