// The elements from html that is needed to interact
const textInput = document.querySelector("#textInputID");
const taskList = document.querySelector("#listTaskID");
const toDoForm = document.querySelector("#toDoFormID");

//add a new task to the task list

function addTask() {
    if (textInput.value) {
        //if input
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");
    }
}