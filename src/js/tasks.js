"use strict";
//variable
const tasksForm = document.querySelector("#tasks__input--form");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.querySelector("#tasks__input--form input");
const tasksBtn = document.getElementById("tasks__btn");
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
  console.log(tasksList.childNodes);
}; //end removeTask func

const handleEmptyTasks = () => {
  if (tasksList.children == 1) {
    setInterval(() => mainContainer.classList.add("task_list_empty"), 500);
  }
};

window.onload = handleEmptyTasks();