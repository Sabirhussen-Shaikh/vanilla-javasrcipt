// todo array
const todoList = [{
    name : 'study',
    dueDate : '22-03-2024'
},{
    name : 'assignment',
    dueDate : '08-05-2022'
},{
    name : 'sports',
    dueDate : '30-10-2024'
}];

renderTodoList();

//render function
function renderTodoList() {

    let todoHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObj = todoList[i];

        // const name = todoObj.name;
        // const dueDate = todoObj.dueDate;
        const {name,dueDate} = todoObj;//destructing

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class = "delete-btn"
            onclick="
            todoList.splice(${i},1);
            renderTodoList();
        ">Delete</button>
        `;

        todoHtml += html;
    }
    console.log(todoHtml)

    document.querySelector('.js-todo-render').innerHTML = todoHtml;
}

//add function
function addTodo() {

    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-input-date');
    const dueDate = dateInputElement.value;

    todoList.push({
        // name : name,
        // dueDate : dueDate
        //shorthand property
        name,
        dueDate
    });
    // console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}