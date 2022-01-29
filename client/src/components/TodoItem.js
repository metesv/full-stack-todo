import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../features/todoSlice';
import { Delete } from "@material-ui/icons";
import { Grid, Paper, IconButton, Checkbox } from "@material-ui/core";

function TodoItem({ id, title, author, completed }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch(toggleComplete({ id, completed: !completed }))
    }

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }))
    }

    return (
        <Grid
            xs={12}
            item
        >
            <Paper elevation={2}>
                <Checkbox
                    checked={completed}
                    onChange={handleCheckboxChange}
                />
                <span>{`${title}(${author})`}</span>
                <IconButton
                    color="secondary"
                    aria-label="Delete"
                    onClick={handleDeleteClick}
                >
                    <Delete fontSize="small" />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default TodoItem;
