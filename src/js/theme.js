"use strict";
const toggleThemeBtn = document.querySelector("#toggle__theme--color");
const logoImg = document.querySelector(".logo__main");

const changeTheme = () => {
  document.body.classList.toggle("dark");
  if (document.body.classList == "dark") {
    logoImg.src = "img/Dark-Spork-Eggman.png";
  } else logoImg.src = "img/Shiny-Spork-Logo-Removebg.svg";
};
toggleThemeBtn.addEventListener("change", changeTheme);
