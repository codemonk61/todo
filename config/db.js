
const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://product-123:product-123@cluster0.izchr.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0', {})
        console.log("mongoDB Success...")
    } catch (error) {
        console.log("mongoDB Fail...")
        process.exit(1)
    }
}

module.exports = connectDB