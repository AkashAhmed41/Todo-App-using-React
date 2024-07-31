import React from "react";
import { useSelector } from "react-redux";

import TodoComponent from "./TodoComponent";

const TodoListComponent = () => {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <div>
      <h1>List of Your Todo Tasks :</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Todo Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => {
              return <TodoComponent key={todo.id} todo={todo} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListComponent;
