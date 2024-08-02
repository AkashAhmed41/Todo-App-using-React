import { createSlice } from "@reduxjs/toolkit";

const initialTodos = {
  todos: [],
  newTodoTitle: "",
  todoForEdit: {},
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    showTodos: (state) => state,
    addNewTitle: (state, action) => {
      state.newTodoTitle = action.payload;
    },
    setUpdatedTitle: (state, action) => {
      state.todoForEdit.title = action.payload;
    },
    setTodoForEdit: (state, action) => {
      state.todoForEdit = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, title, isCompleted } = action.payload;
      const todoForEdit = state.todos.find((todo) => todo.id === id);
      if (todoForEdit) {
        todoForEdit.title = title;
        todoForEdit.isCompleted = isCompleted;
      }
    },
    markAsComplete: (state, action) => {
      const id = action.payload;
      const todoToMark = state.todos.find((todo) => todo.id === id);
      if (todoToMark) {
        todoToMark.isCompleted = !todoToMark.isCompleted;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  showTodos,
  addTodo,
  deleteTodo,
  editTodo,
  markAsComplete,
  addNewTitle,
  setTodoForEdit,
  setUpdatedTitle,
} = todoSlice.actions;
export default todoSlice.reducer;
