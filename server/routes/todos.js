const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const { getAllTodos, saveTodo, updateTodo, deleteTodo } = require('../controllers/todos');

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

router.get('/', (req, res) => {
    getAllTodos(req, res);
})

router.post('/', (req, res) => {
    saveTodo(req, res);
})

router.patch('/:id', getTodo, async (req, res) => {
    updateTodo(req, res);
})

router.delete('/:id', getTodo, async (req, res) => {
    deleteTodo(req, res);
})

module.exports = router;