import React from 'react';
import "../styles/TodoItem.css";
import "../styles/listButtons.css";
import { TodoContext } from './TodoContext';
function TodoItem(props){
    const {todos,setTodos} = React.useContext(TodoContext);
    const onComplete = () =>{
        const oldState =props.children.state;
        const newState = (status)=>{
            if(status ==='COMPLETED')
                {return 'NOT-COMPLETED';}
            else{
                return 'COMPLETED';
        }     
       };
       let data = [...todos]
       const objIndex = data.findIndex((obj => obj.ID == props.children.ID));
       data[objIndex].state = newState(oldState);
       setTodos(data);
    }
    const Erase = () =>{
       let data = [...todos]
       const objIndex = data.findIndex((obj => obj.ID == props.children.ID));
       data.splice(objIndex,1);
       setTodos(data);
    }
    return(
        <li className={`TodoItem-${props.children.state}`}>
            <button onClick={onComplete} className='listButtonsPlus' type='button'>
            <span class="material-symbols-outlined">
                check_circle
            </span>
            </button>
            {props.children.text}
            <button onClick={Erase} className='listButtonsMinus' type='button'>
            <span class="material-symbols-outlined">
                delete
            </span>
            </button>
        </li>
    )
}
export {TodoItem};