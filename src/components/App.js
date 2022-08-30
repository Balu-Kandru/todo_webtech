import React, { useState } from "react";
import "./../styles/App.css";
import Form from "./form";
import Todolist from "./list";

function App() {
	const [inputText, setInputText] = useState("")
	const [todos, setTodos] = useState([])
	return (
	<div id="main">
		<header>
        <center>ToDo List</center>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <Todolist setTodos={setTodos} todos={todos}/>
		
	</div>

	);
}


export default App;
