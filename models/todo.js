const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'Name cannot be blank!'
    },
    completed:{
        type: Boolean,
        defalt: false
    },
    created_Date:{
        type:Date,
        defalt: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;