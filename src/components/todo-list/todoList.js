import React from "react";
import { useSelector } from "react-redux";

import TodoComponent from "../todo/todo";

import styles from "./todoList.module.css";

const TodoListComponent = () => {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <>
      <h1>List of Your Todo Tasks :</h1>
      <div className={styles["table-container"]}>
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
    </>
  );
};

export default TodoListComponent;
