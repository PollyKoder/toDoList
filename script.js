// The elements from html that is needed to interact
const textInput = document.querySelector("#textInputID");
const taskList = document.querySelector("#listTaskID");
const toDoForm = document.querySelector("#toDoFormID");


//add a new task to the task list and make it possible to delete it again

function addTask() {
    if (textInput.value) {
        //if input
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        newTask.textContent = textInput.value;
        taskList.appendChild(newTask);
        newTask.appendChild(deleteButton);
    } else {
        //if no input
        alert("Please enter a task")
    }
    saveData();
}

//My attempt at making a functioning check box
        //function checkTask() {
        //     let checkBox = document.getElementById("#checkBoxID");
        //     if (checkBox.checked === true);
        //     else (checkBox === false);
        //     saveData();
        // }
//Nope, it does make a functioning checkbox, but I need to find out how to get it connected to the li element

//the function below removes the task from the tasklist when it's assigned button is clicked
taskList.addEventListener("click", function (event) {
    event.target.tagName === "BUTTON" && event.target.parentElement.remove();
    saveData();
});

//Prevents the default form and calls addTask()
toDoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});

//Saves the data to local storage, is fired by the add data function
function saveData() {
    localStorage.setItem("taskList", taskList.innerHTML);
}

//Loads data from local storage
function loadData() {
    taskList.innerHTML = localStorage.getItem("taskList");
}
loadData();