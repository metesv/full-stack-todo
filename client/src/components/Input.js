import { useDispatch } from 'react-redux';
import { Save } from "@material-ui/icons";
import { Grid, Card, TextField, Button, IconButton } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createTodo, updateTodo } from '../actions/todos';

const styles = {
    Card: { 
        backgroundColor: 'whitesmoke', 
        border: '1px black solid', 
        padding: 20 
    }
}

function Input({ id, mode, title, author, setEditMode }) {
    const dispatch = useDispatch();
    let initialValues = {};

    if (mode === 'create') {
        initialValues = { title: '', author: '' }
    } else if (mode === 'edit') {
        initialValues = {title, author}
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={
                Yup.object().shape({
                    title: Yup.string().max(45).required('Required'),
                    author: Yup.string().max(35).required('Required')
                })
            }
            onSubmit={async (values, { resetForm })=> {
                if (mode === 'create') {
                    dispatch(createTodo(values));
                    resetForm({});
                } else if (mode === 'edit') {
                    dispatch(updateTodo(id, values));
                    setEditMode(false);
                }
            }}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values
            }) => (
                <form onSubmit={handleSubmit}>
                    <Card style={styles.Card} sx={{ p: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <TextField
                                    error={Boolean(touched.title && errors.title)}
                                    fullWidth
                                    helperText={touched.title && errors.title}
                                    label='Title'
                                    name='title'
                                    variant='outlined'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.title}
                                />
                            </Grid>
                            <Grid item md={10} xs={12}>
                                <TextField
                                    error={Boolean(touched.author && errors.author)}
                                    fullWidth
                                    helperText={touched.author && errors.author}
                                    label='Author'
                                    name='author'
                                    variant='outlined'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.author}
                                />
                            </Grid>
                            <Grid item md={2} xs={12}>
                            {
                                mode === 'edit' ? (
                                    <IconButton
                                        color="secondary"
                                        aria-label="Edit"
                                        onClick={() => handleSubmit()}
                                    >
                                        <Save fontSize="large" />
                                    </IconButton>
                                ) : (
                                    <Button
                                        sx={{ m: 1 }}
                                        color='primary'
                                        variant='contained'
                                        onClick={() => handleSubmit()}
                                    >
                                        Add!
                                    </Button>
                                )
                            }
                            </Grid>
                        </Grid>
                    </Card>
                </form>
            )}
        </Formik>
    );
}

export default Input;
