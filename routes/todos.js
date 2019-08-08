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

router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.put('/:todoId', function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})// achar o Id do todo(por meio de req.params.todoId) e trabalhar sobre as informações enviadas pelo req.body
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.delete('/:todoId', function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "Was deleted!"});
    })
    .catch(function(err){
        res.send(err);
    })
})

module.exports = router;
