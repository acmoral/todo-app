import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from './TodoContext';
function countTasks(arr,equalto){
    const count = arr.filter(function(el){return el.state ==equalto;}).length;
    return count;
};
function TodoCounter(){
    const{todos}=React.useContext(TodoContext);
    return(
        <header><h2> Haz completado {countTasks(todos,'COMPLETED')} tareas de {todos.length}</h2></header>
    );
}

export {TodoCounter};