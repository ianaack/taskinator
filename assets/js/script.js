var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  event.preventDefault();
  // submit task title variable (whatever you type)
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  // select task type variable (home, school, work)
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if input values are empty string
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item of whatever you type in input
  var listItemEl = document.createElement("li");
  //give it a class name of "task-item"
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";
  // appendChild
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);

// create a new function to take in the tasks name and title as arguments and create the HTML elements that get added to the page.

// move the code that creates and add HTML elements from the handler function into the newly created function

// update the handler function to send the task name and type values from the form to the newly created function
