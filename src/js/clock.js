"use strict";
const clockDisplay = document.getElementById("clockDisplay");

const getClock = () => {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let sess = "AM";

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    sess = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  const currentTime = hour + ":" + min + ":" + sec + " " + sess;

  clockDisplay.innerText = currentTime;
  clockDisplay.textContent = currentTime;
  setTimeout(getClock, 1000);
};
getClock();
