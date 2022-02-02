import React, { useState } from 'react';
import { Delete, Edit, Help, Close } from "@material-ui/icons";
import { Grid, Card, IconButton, Checkbox, Container, CardContent, Box, Typography, Tooltip } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { deleteTodo, updateTodo } from '../actions/todos';
import Input from './Input';

const styles = {
    Card: { 
        marginTop: 35,
        background: "whitesmoke",
        border: "1px black solid"
    },
    CheckedCard: { 
        marginTop: 35,
        background: "darkgray",
        border: "1px black solid"
    },
    CardContent: { 
        display: 'flex', 
        justifyContent: 'space-between'
    }
}

function TodoItem({ id, title, author, status, createdAt }) {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
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

    const handleEditClick = () => {
        setEditMode(!editMode);
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
                    style={status === true ? styles.CheckedCard : styles.Card}
                >
                    <CardContent style={styles.CardContent}>
                        <Checkbox
                            checked={status}
                            onChange={handleCheckboxChange}
                        />
                        {
                            editMode === true ? (
                                <Input mode="edit" id={id} title={title} author={author} setEditMode={setEditMode} />
                            ) : (
                                <Box>
                                    <Typography
                                        style={status === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} 
                                        align="center" 
                                        variant="subtitle1"
                                    >
                                        {title}
                                    </Typography>
                                    <Typography align="center" variant="subtitle2">{author}</Typography>
                                </Box>
                            )
                        }
                        <Box>
                            <IconButton
                                color="secondary"
                                aria-label="Edit"
                                onClick={handleEditClick}
                            >
                                {
                                    editMode === false ? (
                                        <Edit fontSize="medium" />
                                    ) : (
                                        <Close fontSize="medium" />
                                    )
                                }
                            </IconButton>
                            <IconButton
                                color="secondary"
                                aria-label="Delete"
                                onClick={handleDeleteClick}
                            >
                                <Delete fontSize="medium" />
                            </IconButton>
                            <Tooltip
                                placement='top-end'
                                title={`Created At: ${c.day}/${c.month}/${c.year}`}
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
