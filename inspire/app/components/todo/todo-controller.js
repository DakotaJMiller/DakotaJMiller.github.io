(function(){
   // new up the TodoService that has already been configured for your use
   // There are two methods getTodos returns and array
   // saveTodos accepts an array and stores it to your local storage
   
   var ts = new TodoService()
   var todos = ts.getTodos()
   var todosElem = $('#todos')

   $('form').on('submit', function(e){
       e.preventDefault();
       var form = this;
       var value = form.newInput.value;

       todos.push(value);

       ts.saveTodos(todos)
       update();
   })
    

   function update(){
       todosElem.empty();
       for(var i = 0; i < todos.length; i++){
           var todo = todos[i];
           todosElem.append(`<div><li>${todo}</li><div>`)
            var foo = document.getElementById('results');
            foo.innerHTML = 'You have ' + todos.length + ' thing(s) left to do!';
       }
        
        $(todosElem).on('click','li', function() {
            var text = $(this).text();
            for(var j = 0; j < todos.length; j++){
               var currentSpot = todos[j]
                if(currentSpot == text){
                     todos.splice(j,1)
                     ts.saveTodos(todos)
                }
            }
           $(this).remove(); 
               var foo = document.getElementById('results');
            foo.innerHTML = 'You have ' + todos.length + ' thing(s) left to do!';
            console.log(text)
        
           });
            
           
   }
   update();

    
    
}())