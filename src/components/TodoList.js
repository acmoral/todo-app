import React from 'react';
import {TodoItem} from './TodoItem';
import "../styles/TodoList.css"


function TodoList({todos,newTodos,setTodos}){
    const pickTodo = (todos,newTodos)=>{
        if(newTodos.length<0){
            return  todos.map((item)=>
            <TodoItem key={item.ID} todos= {todos} setTodos={setTodos}>{item}</TodoItem>
            );
        }
        else{
            return  newTodos.map((item)=>
            <TodoItem key={item.ID} todos={todos} setTodos={setTodos}>{item}</TodoItem>
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

