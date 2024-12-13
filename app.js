const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db")
const todoRoute = require("./routes/todoRoute")
connectDB();
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todo", todoRoute)

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))