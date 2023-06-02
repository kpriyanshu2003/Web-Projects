setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let am_pm = "AM";
  if (h > 12) {
    h -= 12;
    am_pm = "PM";
  }
  if (h == 0) {
    h = 12;
    am_pm = "AM";
  }
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  document.getElementById("clock").innerHTML =
    h + " : " + m + " : " + s + " " + am_pm;
}

showTime();
