import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
      edit : false
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateToDo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.edit = true;  
          return todo;
        } else {
          return todo;
        }
      });
    },
    editToDo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.edit){
          todo.edit = false;
          todo.text = action.payload;  
          return todo;
        } else {
          return todo;
        }
      });
    },

  },
});

export const { addToDo, removeToDo, updateToDo,editToDo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
