import React from "react";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import "../styles/CreateButton.css"
function MainTodo({loading,error,todos}){
    return(
        <main>
          <div className='CreateButton'>
            <CreateTodoButton>
              <span className="material-symbols-outlined" style={{fontSize: 100}}>
                 add_circle
              </span>
            </CreateTodoButton>
          </div>
      <div className='task-bar'>
        <img src={require("../assets/girl.jpg")}/>
      </div>
      <div className='right-container'>
        <TodoSearch />
        <TodoList />
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !todos.length) && <p>¡Crea tu primer TODO!</p>}
      </div>
      </main>
    )
}
export{MainTodo};