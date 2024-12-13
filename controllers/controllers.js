const { response } = require("express");
const Todos = require("../models/todos");

const getAllTodos = async (req, res) => {
  
    const pageNo = req.query.page_no || 1;
    const pageSize = req.query.page_size || 10;
    const skip= (pageNo - 1) * 10;
   try {
    const todos = await Todos.find({}).skip(skip).limit(pageSize);
    const totalItems = await Todos.countDocuments()
    return res.json(
        {
            todos: todos,
            totalItems,
            totalPages: Math.ceil(totalItems / pageSize),
            currentPage: Number(pageNo),
        }
    );
   } catch (error) {
    console.log(error);
    res.status(500).json({message: 'server error'})
   }
}

const setAllTodos = async (req, res) => {
    try {
      
        if (!Object.keys(req.body).length) {
            return res.status(400).json({ message: "Request body is empty" });
        }
        
        const newTodo = new Todos(req.body);
        const savedTodo = await newTodo.save();
        
        res.status(201).json(savedTodo);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
};

const updateTodoStatus = async (req, res) => {
    try {
        const { id } = req.params; // Get the todo ID from the URL parameter


        // Find the todo by ID and update only the isCompleted field
        const updatedTodo = await Todos.findByIdAndUpdate(
            id,
           req.body
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json(updatedTodo); // Return the updated todo
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

const completedTodo = async (req, res) => {
    try {
        const { id } = req.params; // Get the todo ID from the URL parameter


        // Find the todo by ID and update only the isCompleted field
        const updatedTodo = await Todos.findByIdAndUpdate(
            id,
           req.body
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json(updatedTodo); // Return the updated todo
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}


const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params; // Get the todo ID from the URL parameter

        // Attempt to find and delete the todo by its ID
        const deletedTodo = await Todos.findByIdAndDelete(id);

        // If no todo is found, return an error
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // If successful, return the deleted todo's information
        res.status(200).json({ message: "Todo deleted successfully", todo: deletedTodo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getAllTodos,
    setAllTodos,
    updateTodoStatus,
    deleteTodo,
    completedTodo
}
