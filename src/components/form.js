import React from "react";


const Form = ({ setInputText, inputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  const submitHandler = (e) => {
    setTodos([...todos, { text: inputText,id: Math.random() * 1000 }]);
    setInputText("");
  }
  return (
    <div id="main">
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"></input>

      <button onClick={submitHandler}  type="button" >
        <span>Add Task</span>
      </button>

    
    </div>
  );
};

export default Form;