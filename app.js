//first get the form element by class name .add
const addForm = document.querySelector('.add');
//second we get the ul element with .todos
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');



const addTodo = (todo) => {

    const generateTemplate = document.createElement('li');
    generateTemplate.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const span = document.createElement('span');
    span.innerText = todo;
    const icon = document.createElement('i');
    icon.classList.add("far", "fa-trash-alt", "delete");
    generateTemplate.append(span);
    generateTemplate.append(icon);
    list.append(generateTemplate);
};

//adding todos  
addForm.addEventListener('submit', e => {

    e.preventDefault();
    //trim.() deletes the space before and after the todos just only takes string.
    const todo = addForm.add.value.trim();

    if (todo.length) {
        addTodo(todo);
        //reset does reset all the input fields inside that form
        addForm.reset();
    }

});

//delete todos
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {

        e.target.parentElement.remove();
    }
});


search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filtered(term);

});

const filtered = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));

};