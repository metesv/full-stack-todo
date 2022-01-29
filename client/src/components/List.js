import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../features/todoSlice';
import TodoItem from './TodoItem';

function List() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todoList);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <Grid container>
            {
                todos?.map(({ _id, title, author, completed }) => (
                    <TodoItem key={_id} id={_id} title={title} author={author} completed={completed} />
                ))
            }
        </Grid>
    )
}

export default List;
