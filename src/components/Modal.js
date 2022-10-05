import React from "react";
import ReactDOM  from "react-dom";
import {TodoAddTask} from "./TodoAddTask";
import {AddTodoButton} from "./AddTodoButton";
import {CreateTodoButton} from "./CreateTodoButton";
function Modal(){
    return ReactDOM.createPortal(
        <div className="Modal">
           <div className='input-section'>
            <CreateTodoButton>
            <span class="material-symbols-outlined" style={{fontSize: 40}}>
                cancel
            </span>
            </CreateTodoButton>
            <TodoAddTask/>
            <AddTodoButton>
            <span class="material-symbols-outlined" style={{fontSize: 40}}>
                check_circle
            </span>
            </AddTodoButton>
          </div>     
        </div>,
        document.getElementById('modal')
    );
}
export {Modal};