import React from 'react';

function TodoItem(props){
    return(
        
        <li>
            <button type='button'>+</button>
            {props.children}
            <button type='button'>-</button>
        </li>
    )
}
export {TodoItem};