import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsComplete, setTodoForEdit } from "../store/todoSlice";

const TodoComponent = (props) => {
  const { id, title, isCompleted } = props.todo;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(setTodoForEdit({}));
  };

  const handleEdit = ({ id, title, isCompleted }) => {
    dispatch(setTodoForEdit({ id, title, isCompleted }));
  };

  const handleCheckboxChange = (id) => {
    dispatch(markAsComplete(id));
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            handleCheckboxChange(id);
          }}
        ></input>
      </td>
      <td className={isCompleted ? "completed" : ""}>{title}</td>
      <td>
        <button
          onClick={() => {
            handleEdit({ id, title, isCompleted });
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoComponent;
