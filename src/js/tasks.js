"use strict";
//variable
const tasksForm = document.querySelector("#tasks__form");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.querySelector("#tasks__form input");
const tasksBtn = document.querySelector("#tasks__form button ");
const mainContainer = document.getElementsByClassName("main__container");
//function
/*listing todo*/
const printTasks = (clickButton) => {
  clickButton.preventDefault();

  const taskText = document.createElement("span");
  const taskCheckBtn = document.createElement("i");
  const taskItem = document.createElement("li");
  const taskCloseBtn = document.createElement("i");

  taskItem.setAttribute("class", "task__item");
  taskCheckBtn.setAttribute("class", "fas fa-ghost fa-lg");
  taskText.setAttribute("class", "task__item--text");
  taskCloseBtn.setAttribute("class", "fas fa-times fa-lg task__item--close");

  tasksList.appendChild(taskItem);
  taskItem.append(taskCheckBtn, taskText, taskCloseBtn);

  const taskInputValue = tasksInput.value;

  taskText.innerText = taskInputValue;
  tasksInput.value = "";
  clickedGhost(taskCheckBtn);
  removeTask(taskCloseBtn);
}; //end printTasks func

tasksForm.addEventListener("submit", printTasks);

/*remove todo*/
const clickedGhost = (clickBtn) => {
  clickBtn.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    parent.classList.add("task-transparent");
    console.log(parent);
  });
};
const removeTask = (clickBtn) => {
  clickBtn.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    parent.classList.add("task-completed");
    setTimeout(() => {
      parent.remove();
    }, 400);
  });
}; //end removeTask func
