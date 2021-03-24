var tasks = [
    {task: "This example", done: false },
    {task: "Wake up", done: true }
];

displayTasks();

function saveTask() {
    var taskString = document.getElementById("task").value;
    var taskJSON = {task: taskString, done: false};
    tasks.push(taskJSON);
    
    displayTasks();
    document.getElementById("task").value = "";
    document.getElementById("task").focus();
}

function displayTasks() {
    var tmp = "";
    for(var i = 0; i < tasks.length; i++)
    {
        if (i % 2 == 0) {
            tmp += '<div class="col-md-4">';
        }
        else {
            tmp += '<div class="col-md-4 oddelement">';
        }
        
        if (tasks[i].done) {
            tmp += "<div><del>" + tasks[i].task + "</del></div>";
            tmp += '<button class="btn btn-primary" onclick="taskDel(' + i + ')">Del</button>';
        }
        else {
            tmp += "<div>" + tasks[i].task + "</div>";
            tmp += '<button class="btn btn-primary" onclick="taskDone(' + i + ')">Done</button>';
        }
        tmp += "</div>";
    }
    
    document.getElementById("tasks").innerHTML = tmp;
}

function taskDone(idx){
    tasks[idx].done = true;
    displayTasks();
}

function taskDel(idx){
    var newTaks = [];
    for(var i = 0; i < tasks.length; i++) {
        if (i != idx) {
            newTaks.push(tasks[i]);
        }
    }
    tasks = newTaks;
    displayTasks();
}