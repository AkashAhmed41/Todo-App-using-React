import React from "react";

import TodoListComponent from "./TodoListComponent";
import ConfigTodoComponent from "./ConfigTodoComponent";

const AppComponent = () => {
  return (
    <div className="component-container">
      <ConfigTodoComponent />
      <TodoListComponent />
    </div>
  );
};

export default AppComponent;
