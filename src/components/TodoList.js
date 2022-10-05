import React from 'react';
import {TodoItem} from './TodoItem';
import "../styles/TodoList.css"
import{ TodoContext} from "./TodoContext"

function TodoList(){
    const {todos,newTodos,setTodos} = React.useContext(TodoContext);
    const pickTodo = (todos,newTodos)=>{
        if(newTodos.length<0){
            return  todos.map((item)=>
            <TodoItem key={item.ID} >{item}</TodoItem>
            );
        }
        else{
            return  newTodos.map((item)=>
            <TodoItem key={item.ID} >{item}</TodoItem>
            );
        }   
    }
    return(
        
        <ul className='TodoList'>
            {pickTodo(todos,newTodos)}
        </ul>
    )
}
export {TodoList};

