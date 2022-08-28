import React from 'react';
import "../styles/TodoItem.css";
import "../styles/listButtons.css";
function TodoItem(props){
    const onComplete = () =>{
        const oldState =props.children.state;
        const newState = (status)=>{
            if(status ==='COMPLETED')
                {return 'NOT-COMPLETED';}
            else{
                return 'COMPLETED';
        }     
       };
       let data = [...props.todos]
       const objIndex = data.findIndex((obj => obj.ID == props.children.ID));
       data[objIndex].state = newState(oldState);
       props.setTodos(data);
    }
    const Erase = () =>{
       let data = [...props.todos]
       const objIndex = data.findIndex((obj => obj.ID == props.children.ID));
       data.splice(objIndex,1);
       props.setTodos(data);
    }
    return(
        <li className={`TodoItem-${props.children.state}`}>
            <button onClick={onComplete} className='listButtonsPlus' type='button'>
            </button>
            {props.children.text}
            <button onClick={Erase} className='listButtonsMinus' type='button'>
            </button>
        </li>
    )
}
export {TodoItem};