import React from 'react';
import "../styles/CreateTodoButton.css";
import { TodoContext } from './TodoContext';
function CreateTodoButton({children}){
    const {openModal,setOpenModal} = React.useContext(TodoContext);
    const onClickButton = () =>{
        if(openModal){ setOpenModal(false);}
        else{setOpenModal(true)}
    };
    return(
        <button className="CreateTodoButton" type="button" onClick={onClickButton}>{children}</button>
    )
}
export {CreateTodoButton};