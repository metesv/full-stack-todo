const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

const getTodo = async (req, res, next) => {
    let todo;

    try {
        todo = await Todo.findById(req.params.id)
        if (!todo) {
            return res.status(404).json({ message: 'Cannot find todo' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.todo = todo
    next()
}

router.get('/', async (req, res) => {
    try {
        let todos = await Todo.find();

        res.send(todos).status(200);
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', getTodo, (req, res) => {
    res.send(res.todo);
})

router.post('/', async (req, res) => {
    const { title, description, author } = req.body;

    const todo = new Todo({
        title,
        description,
        author
    })

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.patch('/:id', getTodo, async (req, res) => {
    const { id: _id } = req.params;

    const { title, description, author, status } = req.body;

    const newTodo = {
        title,
        description,
        author,
        status
    }

    try {
        const todo = await Todo.findOneAndUpdate({ _id }, { $set: newTodo });

        res.json(todo);
    } catch (error) {
        console.log(error);
    }
})

router.delete('/:id', getTodo, async (req, res) => {
    try {
        const { id: _id } = req.params;

        const todo = await Todos.findOneAndDelete({ _id });
        res.json(todo);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;