//vamos recuperar os dados da nossa api que esta em /api/todos para podermos apresentar np página inicial
/* global $ */
$(document).ready(function(){
    $.getJSON("/api/todos") //recupera os dados da api que estao no formato JSON e então usa eles na function addTodos
    .then(addTodos)
    
    $('#todoInput').keypress(function(event){
      if(event.which == 13) { //13 é o código enviado quando algum dado é enviado por meio do botão enter
        createTodo();
      }
    });
    
    $('.list').on('click', 'li', function(){
      updateTodo($(this));
    })
    
    //add a click listener in the <ul></ul> itself
    $('.list').on('click', 'span', function(e){// estamos esperando por clicks no componente que tenha a classe="list", em particular( estamos esperando clicks nos spans que temos nesse módulo, que é o <ul> </ul>
      e.stopPropagation();
      removeTodo($(this).parent()); //$(this) identificar o span que foi clicado, e vai parente identifica o li ao qual esse span faz parte
    })
});
  
  function addTodos(todos) { //essa function vai adicionar a nossa página inicial o array de todos
    //add todos to page here
    todos.forEach((todo) =>{ //vamos dar um loop nods todos da nossa api
      addTodo(todo);
    });
  }
  
  function addTodo(todo){
    var newTodo = $('<li class="task">'+todo.name +' <span>X</span></li>'); //cada todo.name, isto é, cada nome de todo vai ser convertido em um elemento de lista (<li></li>)
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){ // se o todo estiver completed(por defalt está como false),
      newTodo.addClass("done"); //então se adiciona a ele a classe "done", que está estilizada em public/app.css
    }
    $('.list').append(newTodo);//cada novo elemento de lista vai ser acrescentado ao componente que tem class="list" que
    //está no arquivo index.html, como <ul class="list"></ul>
    //p.s. class="task" serve para estilizar o novo elemento de lista com as própriedades atribuidas a classe task que está em /public/app.css
  }

function createTodo(){
    //send request to creat new todo
    const sendedTodo = $('#todoInput').val();//analisa o valor do todo que foi enviado e atribui ele à sendedTodo
    $.post('/api/todos', {name: sendedTodo})// usar o método POST pra enviar, sendo o nome do novo todo o que foi enviado, pra api que está em api/todos
    .then((newTodo) =>{//de fato, será criado um novo elemento na api com o nome correspondente ao sendedTodo
        $('#todoInput').val('');// após enviar um novo todo, o campo de imput volta a ficar em branco
        addTodo(newTodo);
    })
    .catch((err) =>{
        console.log(err);
    })
}

function removeTodo(todo){
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId; 
    $.ajax({
      method: 'DELETE',
      url: deleteUrl
    })
    .then((data) =>{
      todo.remove();
    })
    .catch((err) =>{
      console.log(err);
    })
  }
    
  function updateTodo(todo){
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    $.ajax({
      method: 'PUT',
      url: updateUrl,
      data: updateData
    })
    .then(function(updatedTodo){
      todo.toggleClass("done");
      todo.data('completed', isDone);
    })
  }