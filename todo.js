const todos = [{
    title : 'Meeting',
    description : ' have a meeting at 6 pm today',
    createdAt : new Date().toString(),
    status : 'active'
},
{
    title : 'Lunch',
    description : ' have lunch at 1 pm today',
    createdAt : new Date().toString(),
    status : 'active'
}];



const formField = document.querySelector('#toDoFormId');
const btnField = document.querySelector('#btn');

btnField.addEventListener('click', function() {
    const form = new FormData(formField);
    for(var key of form.keys()) {
        console.log(form.get(key));
    }
});


function render(todos) {
    const container = document.querySelector('.container');
    const items = todos.map(todo => renderTodoItem(todo));

    items.forEach(item => {
        container.appendChild(item);
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





render(todos);



