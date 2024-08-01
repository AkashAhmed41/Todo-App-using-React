import React from "react";

import styles from "./main.module.css";
import TodoListComponent from "../../components/todo-list/todoList";
import ConfigTodoComponent from "../../components/config-todo/configTodo";

const MainSection = () => {
  return (
    <div className={styles["container"]}>
      <ConfigTodoComponent />
      <TodoListComponent />
    </div>
  );
};

export default MainSection;
