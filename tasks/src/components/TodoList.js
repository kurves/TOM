 import React from 'react';
import Todo from './Todo'
    
    function TodoList({todos,setTodos,todo,text}) {
        console.log(todos);
        return (
          <div>
              <ul>
{todos.map((todo,id)=>(
    <Todo 
   

    key={todo.id}
    text={todo.text}
    todos={todos}
   todo={todo}
    setTodos={setTodos}/>
))}
</ul>
          </div>
        )
}
    
    export default TodoList;
    