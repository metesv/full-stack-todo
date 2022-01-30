import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...todos, action.payload];
    case DELETE:
      return todos.filter(({ _id }) => _id !== action.payload)
    default:
      return todos;
  }
};

export default todoReducer;