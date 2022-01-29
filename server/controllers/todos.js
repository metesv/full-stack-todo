const Todo = require('../models/todo');

const getAllTodos = async (req, res) => {
    try {
        let todos = await Todo.find();

        res.send(todos).status(200);
    } catch (error) {
        console.log(error);
    }
}

const saveTodo = async (req, res) => {
    const { title, author } = req.body;

    const todo = new Todo({
        title,
        author
    })

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateTodo = async (req, res) => {
    const { id: _id } = req.params;

    const { title, author, status } = req.body;

    const newTodo = {
        title,
        author,
        status
    }

    try {
        const todo = await Todo.findOneAndUpdate({ _id }, { $set: newTodo });

        res.json(todo);
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id: _id } = req.params;

        const todo = await Todos.findOneAndDelete({ _id });
        res.json(todo);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllTodos,
    saveTodo,
    updateTodo,
    deleteTodo
}