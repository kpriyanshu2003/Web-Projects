const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const time = document.querySelector(".time");

function rotateClockHands() {
  const dt = new Date();
  const s = dt.getSeconds();
  const m = dt.getMinutes();
  const h = dt.getHours();

  const sRotate = s * 6;
  const mRotate = m * 6;
  const hRotate = 30 * h + m / 2;

  second.style.transform = `rotate(${sRotate}deg)`;
  minute.style.transform = `rotate(${mRotate}deg)`;
  hour.style.transform = `rotate(${hRotate}deg)`;

  time.innerHTML = `
  ${String(h).padStart(2, "0")} :
  ${String(m).padStart(2, "0")} :
  ${String(s).padStart(2, "0")}`;
}

setInterval(rotateClockHands, 1000);
