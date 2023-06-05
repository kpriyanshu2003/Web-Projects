const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function rotateClockHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  console.log(`${hours}:${minutes}:${seconds}`);
  const secondRotation = (seconds / 60) * 360;
  const minuteRotation = ((minutes * 60 + seconds) / 3600) * 360;
  const hourRotation = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  second.style.transform = `rotate(${secondRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  hour.style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
