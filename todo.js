// TODO - you have to complete the filter functionality
// TODO - if the status of todo item is marked as completed
// then the Mark Completed button should be disabled
// TODO - update API (status --> Active - Completed)
//TODO - Delete API (delete a todo)

// To fetch data from local storage
// const data = localStorage.getItem('todos');
// let todos = JSON.parse(data);

let todos = [];
let isEdit = false;
let editId = null;

fetchTodos()
    .then(data => {
        todos = data;
        render(todos);
    })

const formField = document.querySelector('#toDoFormId');
const btnField = document.querySelector('#btn');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
//const showActiveCheckboxField = document.querySelector('#inlineCheckbox1');

// when the user clicks on the button

btnField.addEventListener('click', function() {

    const form = new FormData(formField);
    const formValues = {};
    for(var val of form.keys()) {
        formValues[val] = form.get(val);
    }


    if(!isEdit) {
        // Add functionality
        var todo = getTodo(formValues.title, formValues.description);
        createTodos(todo)
            .then(data => {
                todos = [...todos, todo];
              //  todos.push(todo); // Another way of adding to todos list
                render(todos);
            })
        
    }
    else {
        // Edit functionality

        // immutable way

        var newTodos = [...todos];
        var idx = newTodos.findIndex(t => t.id == editId);
        var todo = {...newTodos[idx]};
        todo.title = formValues.title;
        todo.description = formValues.description;
        newTodos[idx] = todo;
        releaseEditLock();
        todos = newTodos;
      //  persistTodos(todos);
    }
    
    title.value = null;
    description.value = null;
   
});

// function used to store data in localStorage

// function persistTodos(todos) {
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

function editLock(id) {
    editId = id;
    isEdit = true;
    btnField.textContent = 'Save';
}

function releaseEditLock() {
    editd = null;
    isEdit = false;
    btnField.TextContent = 'Add Todo';
}

// Add a new todo item 

function getTodo(title, description) {

    
    // I have to extract the last element and get its id 
    // and id + 1 will be it's new id
    var id;
    if(todos.length == 0) {
        id = 1;
    }
    else {
        var last = todos[todos.length - 1];
        id = last.id + 1;
    }

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

    statusBtn.addEventListener('click', function() {
        
        // mutable way

        // var todo = todos.find(t => t.id == todoItem.id);
        // todo.status = 'Completed';
        // render(todos);

        // Immutable way

        var newTodos = [...todos];
        var idx = newTodos.findIndex(t => t.id == todoItem.id);
        var todo = {... newTodos[idx]};
        todo.status = 'Completed';
        newTodos[idx] = todo;
        todos = newTodos;
      //  persistTodos(todos);
        render(newTodos);
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

    // Edit Button functionality 

    statusBtn.addEventListener('click', function() {
        
        title.value = todoItem.title;
        description.value = todoItem.description;
        editLock(todoItem.id);
        
    });

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

    statusBtn.addEventListener('click', function() {

        // Immutable way

        var newTodos = todos.filter(t => t.id != todoItem.id);
        todos = newTodos;
     //   persistTodos(todos);
        render(newTodos);
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









