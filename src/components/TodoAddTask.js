import React from 'react';
import "../styles/TodoAddTask.css";
import { TodoContext } from './TodoContext';
function TodoAddTask(){
    const {valueToadd,setvalueToadd} = React.useContext(TodoContext);
    const changeValue= (event)=>{
        setvalueToadd(event.target.value)
    }
    return (
        <input  className="TodoAddTask"type='text 'placeholder='Agrega un TODO' value={valueToadd} onChange={changeValue}>
        </input>
    )
}
export {TodoAddTask};