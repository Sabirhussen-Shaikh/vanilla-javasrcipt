// todo array
const todoList = ['study', 'assignment', 'sports'];

renderTodoList();

//render function
function renderTodoList() {

    let todoHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `
        <p>
            ${todo} 
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
            ">Delete</button>
        </p>
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

    todoList.push(name);
    // console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}