"use strict";
const clockDisplay = document.getElementById("clockDisplay");

const getClock = () => {
  const date = new Date();
  let hou = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ses = "AM";

  if (hou == 0) {
    hou = 12;
  }

  if (hou > 12) {
    hou = hou - 12;
    ses = "PM";
  }

  hou = hou < 10 ? "0" + hou : hou;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  const currentTime = hou + ":" + min + ":" + sec + " " + ses;

  clockDisplay.innerText = currentTime;
  clockDisplay.textContent = currentTime;
  setTimeout(getClock, 1000);
};
getClock();
