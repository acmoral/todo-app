import React from 'react';
import "../styles/CreateTodoButton.css";

function CreateTodoButton({todos,setvalueToadd,setTodos,valueToadd}){
    const onClickButton=()=>{
        let data = [...todos]
        const newTodo ={
            "ID":todos.length+1,
            "text":String(valueToadd),
            "state":'NOT-COMPLETED'
        };
        data.push(
            newTodo
        );
        setTodos(data);
        setvalueToadd('');
    }

    return(
        <button className="CreateTodoButton" type="button" onClick={onClickButton}></button>
    )
};
export {CreateTodoButton};