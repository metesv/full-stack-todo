import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../actions/todos';
import TodoItem from './TodoItem';

function List() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    console.log(todos);

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
