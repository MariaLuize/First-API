const   express     = require("express"),
        router      = express.Router();
const   db          = require('../models'); //para acessar o banco de dados
const   helpers     = require('../helpers/todos');



router.route('/')              //Equivale à:
    .get(helpers.getTodos)     // router.get('/',);
    .post(helpers.createTodo)   // router.post('/',);


// router.get('/:todoId',)
// router.put('/:todoId',)
// router.delete('/:todoId',)
//refatorando:
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;
