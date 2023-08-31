let todos = [];
// todo: {
//  id: 1,
//  name: 'I need to catch the train at 4h30PM'
// }

const input = document.querySelector("input");
const addBtn = document.querySelector(".container > button");
const main = document.getElementsByTagName("main")[0];

addBtn.addEventListener("click", () => {
	// Create an object through the class called "Todo"
	const newTodo = new Todo(todos.length + 1, input.value);

	// Store it in the todos array
	todos.push(newTodo);

	// Reset the input value
	input.value = "";

	renderTodos();
});

// Function that renders the elements in the todos array
const renderTodos = () => {
	main.innerHTML = ""; // Reset the main content

	todos.forEach((todo) => {
		displayTodo(todo);
	});
};

// It pushes a new child element to main tag and displays it as a todo
const displayTodo = (todoObj) => {
	main.innerHTML += `<div class="col-12 row justify-content-between align-items-center bg-info-subtle mx-0 px-0 py-2 rounded-3">
        <div class="col-4 p-0 ps-4"><span class="fs-6">${todoObj.name}</span></div>
        <div class="col-4 p-0 text-end">
            <button class="btn btn-danger" onclick="deleteTodoFromTodos(${todoObj.id});">Delete</button>
        </div>
    </div>`;
};

const deleteTodoFromTodos = (todoId) => {
	todos = todos.filter((todo) => todo.id !== todoId);

	renderTodos();
};
