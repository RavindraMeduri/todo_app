const formField = document.querySelector('#toDoFormId');
const btnField = document.querySelector('#btn');

btnField.addEventListener('click', function() {
    const form = new FormData(formField);
    for(var key of form.keys()) {
        console.log(form.get(key));
    }
});