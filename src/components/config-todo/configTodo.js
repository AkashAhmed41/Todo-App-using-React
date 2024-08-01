import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  addNewTitle,
  addTodo,
  editTodo,
  setUpdatedTitle,
  setTodoForEdit,
} from "../../store/todoSlice";

import styles from "./configTodo.module.css";

const ConfigTodoComponent = () => {
  const todoForEdit = useSelector((state) => state.todosReducer.todoForEdit);
  const title = useSelector((state) => state.todosReducer.newTodoTitle);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(todoForEdit)) {
      const { id, title, isCompleted } = todoForEdit;
      dispatch(editTodo({ id, title, isCompleted }));
      dispatch(setTodoForEdit({}));
    } else {
      const newTodo = { id: uuidv4(), title, isCompleted: false };
      dispatch(addTodo(newTodo));
      dispatch(addNewTitle(""));
    }
  };

  const isEmpty = (todoForEdit) => {
    return Object.keys(todoForEdit).length === 0;
  };

  return (
    <div className={styles["config-container"]}>
      <h1>{isEmpty(todoForEdit) ? "Add New Todo" : "Update Your Todo"}</h1>
      <form className={styles["input-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-field"]}>
          <label htmlFor="title">
            {isEmpty(todoForEdit) ? "Todo Title: " : "Edited Title: "}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={isEmpty(todoForEdit) ? title : todoForEdit.title}
            onChange={(e) => {
              isEmpty(todoForEdit)
                ? dispatch(addNewTitle(e.target.value))
                : dispatch(setUpdatedTitle(e.target.value));
            }}
            required
          />
        </div>
        <button type="submit">
          {isEmpty(todoForEdit) ? "Add Todo" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default ConfigTodoComponent;
