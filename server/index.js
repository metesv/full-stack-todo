require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message))

app.use(express.json());
app.use(cors());

const todosRouter = require('./routes/todos');
app.use('/', todosRouter);