"use strict";
//variable
const tasksForm = document.querySelector("#tasks__form");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.querySelector("#tasks__form input");
const tasksBtn = document.querySelector("#tasks__form button ");
const mainContainer = document.getElementsByClassName("main__container");

//function
/*listing TODO*/
const printTasks = (clickButton) => {
  clickButton.preventDefault();

  const taskItem = document.createElement("li");
  const taskCheckBtn = document.createElement("i");
  const taskText = document.createElement("span");
  taskItem.setAttribute("class", "task__item");
  taskCheckBtn.setAttribute("class", "fas fa-ghost fa-lg");
  taskText.setAttribute("class", "task__item--text");

  tasksList.appendChild(taskItem);
  taskItem.append(taskCheckBtn, taskText);

  const taskInputValue = tasksInput.value;
  taskText.innerText = taskInputValue;
  tasksInput.value = "";

  removeTask(taskCheckBtn);
}; //end printTasks func

tasksForm.addEventListener("submit", printTasks);

/*remove TODO*/
const removeTask = (taskCheckBtn) => {
  taskCheckBtn.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    parent.classList.add("task-completed");
    setTimeout(() => {
      parent.remove();
    }, 400);
  });
}; //end removeTask func
