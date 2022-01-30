import { FETCH_ALL, CREATE } from '../constants/actionTypes';

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...todos, action.payload];
    default:
      return todos;
  }
};

export default todoReducer;