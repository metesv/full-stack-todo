import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchTodos = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url, newTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);