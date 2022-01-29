import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      addTodo: (state, action) => {
        const newTodo = {
            id: Math.floor(Math.random()*1000),
            title: action.payload.title,
            author: action.payload.author,
            completed: false
        };
        state.todoList.push(newTodo);
      },
      toggleComplete: (state, action) => {
        const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
        state.todoList[index].completed = action.payload.completed;
      },
      deleteTodo: (state, action) => {
        state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id);
      }
  },
});

export const { 
    addTodo,
    toggleComplete,
    deleteTodo
} = todoSlice.actions;

export default todoSlice.reducer;
