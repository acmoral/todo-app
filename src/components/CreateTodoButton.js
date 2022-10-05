import React from 'react';
import "../styles/CreateTodoButton.css";
import { TodoContext } from './TodoContext';

function CreateTodoButton(){
    const {todos,setvalueToadd,setTodos,valueToadd} = React.useContext(TodoContext);
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