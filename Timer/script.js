var click = false,
  x = 0,
  p = "";
var audio = new Audio("sound.mp3");
function jsrun(now) {
  if (click) resett();
  click = true;
  if (isNaN(now)) {
    clearInterval(x);
    alert("Please pick a date after clicking on the calendar icon.");
    document.querySelectorAll("input")[0].focus();
  } else {
    x = setInterval(() => {
      var dt = new Date().getTime();
      var distance = now - dt;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        p = "-";
        days += 1;
        hours += 1;
        minutes += 1;
        audio.play();
      }
      if (days < 10) days = p + "0" + Math.abs(days);
      if (hours < 10) hours = p + "0" + Math.abs(hours);
      if (minutes < 10) minutes = p + "0" + Math.abs(minutes);
      if (seconds < 10) seconds = p + "0" + Math.abs(seconds);
      document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
    document.getElementById("until").innerHTML = new Date(now);
  }
}

function resett() {
  if (click) clearInterval(x);
  click = false;
  document.getElementById("demo").innerHTML = "";
  document.getElementById("until").innerHTML = "";
  audio.pause();
  p = "";
}

window.onload = () => {
  a = window.location.href;
  let c = a.lastIndexOf("?");
  a = a.substring(c + 1);
  a = a.replaceAll("_", " ");
  if (c == -1 || a == "") console.log("Parameter Empty");
  else if (!isNaN(new Date(a).getTime())) jsrun(new Date(a).getTime());
  else
    console.warn("Wrong Parameter Format\nCorret Format : DD_MM_YYYY_HH:MM:SS");
};
