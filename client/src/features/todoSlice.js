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
            id: Date.now,
            title: action.payload.title,
            author: action.payload.author,
            completed: false
        };
        state.todoList.push(newTodo);
      }
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
