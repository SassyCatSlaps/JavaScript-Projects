//make function that gets task from input
function get_todos() {
    //create array of tasks to be input
    var todos = new Array;
    //pull task from w/b mem
    var todos_str = localStorage.getItem('todo');
    //if input != null, then json.parse tells w/b to make task into js obj.
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//create funtion that adds task to get_todos function array
function add() {
    //create a var out of inputed task
    var task = document.getElementById('task').value;
    var todos = get_todos();
    //add new task to end of array
    todos.push(task);
    //convert task input into json.stringify
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}
//make function keep tasks on screen permanetly
function show() {
    //set retrieved task as var
    var todos = get_todos();
    //set each task as unordered list
    var html = '<ul>';
    //display task to list in the order it is input (by user)
    for (var i = 0; i < todos.length; i++) {
        //disply task as list and make button with x in it
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    //display task as list
    document.getElementById('todos').innerHTML = html;

    //added in event listener within 'show' function to each remove button
    var buttons = document.querySelectorAll('.remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

//make function to remove todo item
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

//when 'add item' button clicked, display inputed task
document.getElementById('add').addEventListener('click', add);
//call show function so existing inputs displayed on screen
show();