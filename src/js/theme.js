"use strict";
import "regenerator-runtime";
import * as gulpEnv from "./gulpEnv";
const toggleThemeBtn = document.querySelector("#toggle__theme--color");
const logoImg = document.querySelector(".logo__main");
const advicePhrase = document.querySelector("#sidebar__advice");

const randomAdvice = async () => {
  const adviceResponse = await fetch(gulpEnv.ADVICE_API_LINK);
  const adviceResponseJson = await adviceResponse.json();
  advicePhrase.innerText = `"${adviceResponseJson.slip.advice}"`;
};

const changeTheme = () => {
  document.body.classList.toggle("dark");
  if (document.body.classList == "dark") {
    logoImg.src = "img/Dark-Spork-Eggman.png";
  } else logoImg.src = "img/Shiny-Spork-Logo-Removebg.svg";
};

toggleThemeBtn.addEventListener("change", changeTheme);
randomAdvice();
