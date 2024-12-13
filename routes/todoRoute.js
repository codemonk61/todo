const express = require('express')
const {
    getAllTodos,
    setAllTodos,
    updateTodoStatus,
    deleteTodo,
    completedTodo
 } = require("../controllers/controllers")
const routes = express.Router();

routes.get("/", getAllTodos)


routes.post("/",setAllTodos)

routes.put("/:id", updateTodoStatus)

routes.put("/completed/:id", completedTodo)

routes.delete("/:id", deleteTodo)

module.exports = routes