"use strict";
const loginForm = document.querySelector("#login__form");
const loginInput = document.querySelector("#login__form input");
const greeting = document.querySelector("#greeting");
const sidebarGreeting = document.querySelector(".profile__name");
const HIDDEN_CLASSNAME = "hidden";
const sidebarBtn = document.querySelector(".sidebar--button i");
const sidebar = document.querySelector(".sidebar__container");
const sidebarCloseBtn = document.querySelector(".sidebar__header i");
const sidebarLogoutBtn = document.querySelector(".list__element--logout");
const sidebarHomeBtn = document.querySelector(".list__element--home");
const container = document.querySelector(".container");

//functions
const onLoginSubmit = (clickButton) => {
  clickButton.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `${username}'s Tasks`;
  sidebarGreeting.innerText = username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};
const handleLogout = () => {
  localStorage.removeItem("username", handleLogout);
  loginInput.value = "";
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  sidebarGreeting.innerText = "Hello,There!";
};

const openSidebar = () => {
  sidebar.style.width = "50vw";
  sidebar.style.borderWidth = "3px";
};
const closeSidebar = () => {
  sidebar.style.width = "0vw";
  sidebar.style.borderWidth = "0px";
};

//event
loginForm.addEventListener("submit", onLoginSubmit);
sidebarLogoutBtn.addEventListener("click", handleLogout);
sidebarBtn.addEventListener("click", openSidebar);
sidebarCloseBtn.addEventListener("click", closeSidebar);
sidebarHomeBtn.addEventListener("click", closeSidebar);
