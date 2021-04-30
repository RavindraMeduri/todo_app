const formField = document.querySelector('#toDoFormId');
const btnField = document.querySelector('#btn');

btnField.addEventListener('click', function() {
    const form = new FormData(formField);
    for(var key of form.keys()) {
        console.log(form.get(key));
    }
});

// old way of converting javascript objects into html elements

/* function makeItems(title, descrption, status) {
    const outerRow = document.createElement('div');
    outerRow.classList.add(['row','jumbotron','section']);
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('col-md-2');

    outerDiv.appendChild(titleDiv);
} */
