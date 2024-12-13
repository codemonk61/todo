const mongoose = require('mongoose')

 const todosSchema = new mongoose.Schema({
    title:  {type: String, required: false},
    description: {type: String, required: false},
    created_by: {type: String, required: false},
    is_completed: {type: Boolean, required: false},
    is_editable: {type: Boolean, required: false}
})

const Todos = mongoose.model("todos", todosSchema)

module.exports = Todos;