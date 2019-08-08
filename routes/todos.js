const   express     = require("express"),
        router      = express.Router();
const   db          = require('../models'); //para acessar o banco de dados



router.get('/', function(req, res){ //na verdade a rota é: /api/todos/
    db.Todo.find() //achar todos os Todos no banco de dados
    .then(function(todos){// após achar todos, usa-se promise coom .then
        res.json(todos);
    })
    .catch(function(req,res){ // caso haja erro, usa-se .catch para mostrar o erro
        res.send(err)
    })
});

router.post('/', function(req,res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catche(function(err){
        res.send(err);
    })
})

module.exports = router;
