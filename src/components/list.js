import React from "react";
import Todo from "./todo";

const Todolist = ({ todos, setTodos }) => {
  return (
    <div>
      <div >
        <ul >
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;