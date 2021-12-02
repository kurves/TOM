import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";



function TodoApp() {

	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	function addTodo(e) {
		setInputText("");
		e.preventDefault();
		setTodos([...todos, { text: inputText,completed:false, id:Math.random()*10 }]);

	}
	function handleChange(e) {
		setInputText(e.target.value);
	}
	
	
	return (
		<div className="input">
			<h1>Todo App</h1>
			<form>
				<input
					value={inputText}
					className="todoinputt"
					placeholder="Input Task"
					onChange={handleChange}
					type="text"
					
				/>
				<button onClick={addTodo} type="submit" className="todoinput">
					Add Task
				</button>
			</form>
			<TodoList
		
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setinputText={setInputText}
			/>
	
		</div>
	);
}

export default TodoApp;
