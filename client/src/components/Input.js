import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import { Grid, Card, TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

function Input() {
    const dispatch = useDispatch();

    // const addInput = () => {

    //     dispatch(saveTodo({
    //         item: input,
    //         done: false,
    //         id: Date.now
    //     }));
    // }

    return (
        <Formik
            initialValues={{ title: '', author: '' }}
            validationSchema={
                Yup.object().shape({
                    title: Yup.string().max(255).required('Required'),
                    author: Yup.string().max(255).required('Required')
                })
            }
            onSubmit={async (values)=> {
                const { title, author } = values;
                dispatch(
                    addTodo({
                        title,
                        author
                    })
                )
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
                    <Card sx={{ p: 1 }}>
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
                                <Button
                                    sx={{ m: 1 }}
                                    color='primary'
                                    variant='contained'
                                    onClick={() => handleSubmit()}
                                >
                                    Add!
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </form>
            )}
        </Formik>
    );
}

export default Input;
