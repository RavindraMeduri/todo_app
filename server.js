function fetchTodos() {
    return fetch('http://localhost:3000/todos')
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
}

function createTodos(data) {
    return fetch('http://localhost:3000/todos', {
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
}

function deleteTodos(id) {
    return fetch('http://localhost:3000/todos/${id}', {
        method : 'DELETE'
    }) 
    .then((res) => res.json())
    .then((data) => (data))
    .catch((err) => console.log(err));
}