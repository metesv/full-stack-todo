import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function List() {
    const todos = useSelector((state) => state.todos.todoList);
    console.log(todos);
    return (
        <Grid container>
            {
                todos?.map(({ id, title, author, completed }) => (
                    <TodoItem key={id} id={id} title={title} author={author} completed={completed} />
                ))
            }
        </Grid>
    )
}

export default List;
