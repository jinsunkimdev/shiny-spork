"use strict";
//variable
const tasksForm = document.querySelector("#tasks__input--form");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.querySelector("#tasks__input--form input");
const tasksBtn = document.getElementById("tasks__btn");
const taskItem = document.createElement("li");
const taskCheckBtn = document.createElement("div");
const taskText = document.createElement("span");
const taskInputValue = tasksInput.value;

//function
const printTasks = (clickButton) => {
  clickButton.preventDefault();
  taskItem.setAttribute("class", "task__item");
  taskCheckBtn.setAttribute("class", "task__item--check");
  taskText.setAttribute("class", "task__item--text");

  tasksList.appendChild(taskItem);
  taskItem.append(taskCheckBtn, taskText);

  taskText.innerText = taskInputValue;
  tasksInput.value = "";

  removeTask(tasksBtn);
};
tasksForm.addEventListener("submit", printTasks);

const removeTask = (checkedBtn) => {
  checkedBtn.addEventListener("click", (what) => {
    what.preventDefault();
    checkedBtn.remove;
    checkedBtn.parentElement.remove;
  });
};
