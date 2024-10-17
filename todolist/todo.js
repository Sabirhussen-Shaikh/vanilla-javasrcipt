// todo array
// const todoList = [{
//     name : 'study',
//     dueDate : '22-03-2024'
// },{
//     name : 'assignment',
//     dueDate : '08-05-2022'
// },{
//     name : 'sports',
//     dueDate : '30-10-2024'
// }];

const todoList = JSON.parse(localStorage.getItem('todoValues'));

console.log(JSON.parse(localStorage.getItem('todoValues')));

renderTodoList();

//render function
function renderTodoList() {

    let todoHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObj = todoList[i];

        // const name = todoObj.name;
        // const dueDate = todoObj.dueDate;
        const { name, dueDate } = todoObj;//destructing

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
    // console.log(todoHtml)

    localStorage.setItem('todoValues', JSON.stringify(todoList));

    document.querySelector('.js-todo-render').innerHTML = todoHtml;

}


//add function
function addTodo() {

    if (isEmpty() == false) {

        // querySelector
        const inputElement = document.querySelector('.js-input-name');
        const nameEntered = inputElement.value;

        const dateInputElement = document.querySelector('.js-input-date');
        const dueDateEntered = dateInputElement.value;

        todoList.push({
            name: nameEntered,
            dueDate: dueDateEntered
            //shorthand property
            // name,
            // dueDate
        });
        console.log(todoList);

        inputElement.value = '';
        dateInputElement.value = '';

        renderTodoList();
    }

}

function isEmpty() {

    // querySelector
    const inputElement = document.querySelector('.js-input-name');
    const nameEntered = inputElement.value;

    const dateInputElement = document.querySelector('.js-input-date');
    const dueDateEntered = dateInputElement.value;

    if (nameEntered === '') {
        alert("please enter todo name...!");
        return true;
    }

    if (dueDateEntered === '') {
        alert('please enter deadline date...!');
        return true;
    }

    return false;
}