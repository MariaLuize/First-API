const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser");

const todoRoutes  = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));// tudo no public diretory está sendo referenciado como um arquivo estático  
app.use(express.static(__dirname + '/views')); // relacionado ao res.sendFile("index.html");
//__dirname se refere ao diretório corrente

const port = 3000;
const ip = "localhost";

app.get('/', function(req,res){
    res.sendFile("index.html");// está referenciando __dirname/views/index.html
});

app.use('/api/todos', todoRoutes); //prefixo para todas as rotas: /api/todos


app.listen(port, ip, function(){
    console.log("My API foi inicializada...");
});