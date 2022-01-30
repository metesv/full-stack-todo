import React from 'react';
import { Delete, Edit } from "@material-ui/icons";
import { Grid, Card, IconButton, Checkbox, Container, CardContent, Box, Typography } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../actions/todos';

function TodoItem({ id, title, author, completed }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        // dispatch(toggleComplete({ id, completed: !completed }))
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
                            checked={completed}
                            onChange={handleCheckboxChange}
                        />
                        <Box>
                            <Typography align="center" variant="subtitle1">{title}</Typography>
                            <Typography align="center" variant="subtitle2">{author}</Typography>
                        </Box>
                        <Box>
                            <IconButton
                                color="secondary"
                                aria-label="Delete"
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
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Grid>
    )
}

export default TodoItem;
