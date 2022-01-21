"use strict";
const loginForm = document.querySelector("#login__form");
const loginInput = document.querySelector("#login__form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const sidebarBtn = document.querySelector(".sidebar--button i");
const sidebar = document.querySelector(".sidebar__container");
const sidebarCloseBtn = document.querySelector(".sidebar__header i");
const container = document.querySelector(".container");

const onLoginSubmit = (clickButton) => {
  clickButton.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `${username}'s Tasks`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem("username");

const openSidebar = () => {
  sidebar.style.width = "50vw";
  sidebar.style.borderWidth = "3px";
};
sidebarBtn.addEventListener("click", openSidebar);
const closeSidebar = () => {
  sidebar.style.width = "0vw";
  sidebar.style.borderWidth = "0px";
};
sidebarCloseBtn.addEventListener("click", closeSidebar);
