import React from 'react';
import '../styles/TodoCounter.css';
function countTasks(arr,equalto){
    const count = arr.filter(function(el){return el.state ==equalto;}).length;
    return count;
};
function TodoCounter(props){
    return(
        <header><h2> Haz completado {countTasks(props.todos,'COMPLETED')} tareas de {props.todos.length}</h2></header>
    );
}

export {TodoCounter};