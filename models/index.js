const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.connect('mongodb://localhost:27017/first-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');