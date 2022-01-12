"use strict";
//variable
const tasksForm = document.querySelector("#tasks__input--form");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.querySelector("#tasks__input--form input");
const tasksBtn = document.getElementById("tasks__btn");
const mainContainer = document.querySelector(".main__container");

//function
/*listing TODO*/
const printTasks = (clickButton) => {
  clickButton.preventDefault();

  const taskItem = document.createElement("li");
  const taskCheckBtn = document.createElement("div");
  const taskText = document.createElement("span");
  taskItem.setAttribute("class", "task__item");
  taskCheckBtn.setAttribute("class", "task__item--check");
  taskText.setAttribute("class", "task__item--text");

  tasksList.appendChild(taskItem);
  taskItem.append(taskCheckBtn, taskText);

  const taskInputValue = tasksInput.value;
  taskText.innerText = taskInputValue;
  tasksInput.value = "";
  if (tasksList.childNodes.length == 1) {
    setTimeout(() => {
      mainContainer.classList.add("task_list_empty");
    }, 500);
  } else
    setTimeout(() => {
      mainContainer.classList.remove("task_list_empty");
    });
  removeTask(taskCheckBtn);
};

tasksForm.addEventListener("submit", printTasks);

/*remove TODO*/
const removeTask = (taskCheckBtn) => {
  taskCheckBtn.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    parent.classList.add("task-completed");
    setTimeout(() => {
      parent.remove();
    }, 400);

    if (tasksList.childNodes.length == 1) {
      setTimeout(() => {
        mainContainer.classList.add("task_list_empty");
      }, 500);
    }
  });
};
