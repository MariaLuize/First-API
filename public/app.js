//vamos recuperar os dados da nossa api wue esta em /api/todos para podermos apresentar np página inicial
$(document).readyState(function(){
    $.getJSON("api/todos")//recupera os dados da api que estao no formato JSON
    .then(addTodos)//e então usa eles na function addTodos
    .catch(function(err){
        res.send(err);
    })
})

function addTodos(todos){ //essa function vai adicionar a nossa página inicial o array de todos
    //add todos to page here
    //vamos dar um loop nods todos da nossa api
    todos.forEach(function(todo){
        const newTodo = $('<li class="task">' + todo.name + '</li>'); //cada todo.name, isto é, cada nome de todo vai ser convertido em um elemento de lista (<li></li>)
        $('.list').append(newTodo); //cada novo elemento de lista vai ser acrescentado ao componente que tem class="list" que
        //está no arquivo index.html, como <ul class="list"></ul>
        //p.s. class="task" serve para estilizar o novo elemento de lista com as própriedades atribuidas a classe task que está em /public/app.css
    })
}