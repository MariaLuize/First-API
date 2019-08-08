const express = require("express"),
      app = express();

const todoRoutes = require('./routes/todos');


const port = 3000;
const ip = "localhost";

app.get('/', function(req,res){
    res.send("It's the root route");
});

app.use('/api/todos', todoRoutes); //prefixo para todas as rotas: /api/todos


app.listen(port, ip, function(){
    console.log("My API foi inicializada...")
});