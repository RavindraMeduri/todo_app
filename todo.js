const todos = [];

const formField = document.querySelector('#toDoFormId');
const btnField = document.querySelector('#btn');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

btnField.addEventListener('click', function() {
    const form = new FormData(formField);
    const formValues = {};
    for(var val of form.keys()) {
        formValues[val] = form.get(val);
    }

    var todo = getTodo(formValues.title, formValues.description);

    title.value = null;
    description.value = null;

    todos.push(todo);
    render(todos);
});

function getTodo(title, description) {

    // Task 1
    // I have to extract the last element and get its id 
    // and id + 1 will be it's new id
    var id;
    return {
        id,
        title, // Alternative - title : title (new feature in js)
        description, // description : description
        createdAt : new Date().toString(),
        status : 'Active'
    };
}

function render(todos) {
    const todo_list = document.querySelector('.todo_list');
    const items = todos.map(todo => renderTodoItem(todo));

    // I have to clear all the contents of todo_list
    todo_list.innerHTML = null;

    items.forEach(item => {
        todo_list.appendChild(item);
    });
}


// old way of adding javascript objects into an html element

function renderTodoItem(todoItem) {

    const mainRow = document.createElement('div');
    mainRow.className = 'row jumbotron section';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'col-md-2';
    titleDiv.textContent = todoItem.title;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'col-md-2';
    descriptionDiv.textContent = todoItem.description;

    const statusDiv = document.createElement('div');
    statusDiv.className = 'col-md-2';
    statusDiv.textContent = todoItem.status;

    const markCompletedDiv = document.createElement('div');
    markCompletedDiv.className = 'col-md-2';
    let statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-info';
    statusBtn.textContent = 'Mark Completed';

    // Task 2
    // you have to find out a todo from that list of todos
    // whose id is todo.id
    // and change the status of that 
    // and call the render() function again

    statusBtn.addEventListener('click', () => {
        console.log(todo.id);
    });

    markCompletedDiv.appendChild(statusBtn);

    const actionDiv = document.createElement('div');
    actionDiv.className = 'col-md-4';

    const row = document.createElement('div');
    row.className = 'row';

    const editBtnDiv = document.createElement('div');
    editBtnDiv.className = 'col-md-3';
    
    statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-primary';
    statusBtn.textContent = 'Edit';

    editBtnDiv.appendChild(statusBtn);

    const deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.className = 'col-md-3';

    statusBtn = document.createElement('button');
    statusBtn.className = 'btn btn-danger';
    statusBtn.textContent = 'Delete';

    // Task 3
    // you have to remove a todo from that list of todos
    // (filter function) 
    // and call the render() function again

    statusBtn.addEventListener('click', () => {
        console.log(todo.id);
    });

    deleteBtnDiv.appendChild(statusBtn);

    row.appendChild(editBtnDiv);
    row.appendChild(deleteBtnDiv);
    actionDiv.appendChild(row);

    mainRow.appendChild(titleDiv);
    mainRow.appendChild(descriptionDiv);
    mainRow.appendChild(statusDiv);
    mainRow.appendChild(markCompletedDiv);
    mainRow.appendChild(actionDiv);

    return mainRow;
}





