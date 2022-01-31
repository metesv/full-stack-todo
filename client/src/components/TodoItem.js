import React from 'react';
import { Delete, Edit, Help } from "@material-ui/icons";
import { Grid, Card, IconButton, Checkbox, Container, CardContent, Box, Typography, Tooltip } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { deleteTodo, updateTodo } from '../actions/todos';

function TodoItem({ id, title, author, status, createdAt }) {
    const dispatch = useDispatch();
    const { c } = DateTime.fromISO(createdAt);

    const handleCheckboxChange = () => {
        const newTodo = {
            id,
            title,
            author,
            status: !status
        }
        
        dispatch(updateTodo(id, newTodo));
    }

    const handleDeleteClick = () => {
        dispatch(deleteTodo(id));
    }

    return (
        <Grid xs={12} item>
            <Container>
                <Card 
                    className="root"
                    variant="outlined"
                    style={{ marginTop: 35, background: "lightgray" }}
                >
                    <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Checkbox
                            checked={status}
                            onChange={handleCheckboxChange}
                        />
                        <Box>
                            <Typography align="center" variant="subtitle1">{title}</Typography>
                            <Typography align="center" variant="subtitle2">{author}</Typography>
                        </Box>
                        <Box>
                            <IconButton
                                color="secondary"
                                aria-label="Edit"
                                onClick={() => console.log('edit')}
                            >
                                <Edit fontSize="small" />
                            </IconButton>
                            <IconButton
                                color="secondary"
                                aria-label="Delete"
                                onClick={handleDeleteClick}
                            >
                                <Delete fontSize="small" />
                            </IconButton>
                            <Tooltip
                                placement='top-end'
                                title={`${c.day}/${c.month}/${c.year}`}
                            >
                                <Help />
                            </Tooltip>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Grid>
    )
}

export default TodoItem;
