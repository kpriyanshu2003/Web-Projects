const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];

const month = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.getElementById("user").innerHTML = `Hey! Priyanshu`;
function DnT() {
  setInterval(() => {
    let dt = new Date();
    let h = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours();
    let m = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();

    document.getElementById("time").innerHTML = `${h} : ${m}`;
    document.getElementById("date").innerHTML = `${
      days[dt.getDay()]
    }, ${dt.getDate()} ${month[dt.getMonth()]} ${dt.getFullYear()}`;
  }, 1000);
}

DnT();
