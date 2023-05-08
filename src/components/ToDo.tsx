import {useState} from "react";

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const handleAddTodo = () => {
		const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
		const newTodoItem = {id: newId, description: newTodo};
		setTodos([...todos, newTodoItem]);
		setNewTodo("");
	};

	const handleDeleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<div>
			<h1>Todo List</h1>
			<div>
				<input
					type="text"
 					placeholder="Enter a task"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
				/>
				<button className='btn' onClick={handleAddTodo}>Add</button>
			</div>
			<ul>
				{todos.map(todo =>
					<li key={todo.id}>
						{todo.description}
						<button className='btn' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
					</li>
				)}
			</ul>
		</div>
	);
}

export default TodoList;
