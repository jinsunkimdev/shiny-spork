"use strict";
const loginForm = document.querySelector("#login__form");
const loginInput = document.querySelector("#login__form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

const onLoginSubmit = (clickButton) => {
  clickButton.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `👾${username}'s Tasks👻`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem("username");
