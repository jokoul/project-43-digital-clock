// console.log("connected");
//get html element
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  // manage AM and PM
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  //set 2 digits
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerHTML = ampm;
  //every one second we run the same function updateClock
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
