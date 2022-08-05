import React from 'react';
import {TodoItem} from './TodoItem';
function TodoList(props){
    return(
        <ul>
            {props.items.map((item)=>
            <TodoItem key={item.ID}>{item.text}</TodoItem>
            )}
        </ul>
    )
}
export {TodoList};

