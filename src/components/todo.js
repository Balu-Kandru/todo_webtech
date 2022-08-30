import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(ele => ele.id !== todo.id))
    }

    const handlesubmit = (e) => {
        let element=document.querySelector('h1')
        console.log(element)
    }
    return (
        <div>
            <div className="todo">
                <h1>{text}</h1>
                <button onClick={handlesubmit} className="complete-btn">Edit</button>
                <button onClick={deleteHandler} className="delete-btn">delete</button>
            </div>
        </div>
    );
};

export default Todo;