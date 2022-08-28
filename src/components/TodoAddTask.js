import React from 'react';
import "../styles/TodoAddTask.css";
function TodoAddTask({valueToadd,setvalueToadd}){
    const changeValue= (event)=>{
        setvalueToadd(event.target.value)
    }
    return (
        <input  className="TodoAddTask"type='text 'placeholder='Agrega un TODO' value={valueToadd} onChange={changeValue}>
        </input>
    )
}
export {TodoAddTask};