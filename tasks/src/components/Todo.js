import React from 'react';
import {useState} from 'react';
import { FaTrash, FaCheck, FaRegStar} from "react-icons/fa";


function Todo({ text,todo, todos,setTodos }) {
	const[completed,isCompleted] =useState(false);
const[highlight,setHighlight] =useState(false)

function deleteTodos(){
setTodos(todos.filter((el)=>el.id !==todo.id))
}


function completedTasks(){
isCompleted(!completed)
    setTodos(todos.map((item)=>{
       
          if(item.id===todo.id){
               return{
                   ...item, completed:!item.completed
               }
   }return item
        
    }));
};

function setFavorite(){
	setHighlight(!highlight)

}



	return (
		<div className="todos">
			<div className={highlight? "h-task-btn":"task-btn"}>
				<li>{text}</li>
				<li>
					<i>{completed ? "Completed" : " Not Done yet"}</i>
				</li>

			</div>
			<button
				onClick={completedTasks}
				className="facheck"
				style={{ backgroundColor: "green", border: "none" }}>
				<FaCheck />
			</button>
			<button
				onClick={deleteTodos}
				className="fatrash"
				style={{ backgroundColor: "red", border: "none" }}>
				<FaTrash />
			</button>
			
			<button
            onClick={setFavorite}
				className="fastar"
				style={{ backgroundColor: "orange", border: "none" }}>
				<FaRegStar />


				</button>

			</div>
	);
}

export default Todo;
