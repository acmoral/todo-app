import React from "react";
import {TodoAddTask} from "./TodoAddTask";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";

function MainTodo({loading,error,valueToadd,setvalueToadd,setTodos,searchValue,setSearchValue,newTodos,todos}){
    return(
        <main>
      <div className='task-bar'>
        <div className='input-section'>
          <TodoAddTask valueToadd={valueToadd} setvalueToadd={setvalueToadd}/>
          <CreateTodoButton setTodos={setTodos} todos={todos} setvalueToadd={setvalueToadd} valueToadd={valueToadd}/>
        </div>    
        <img src={require("../assets/girl.jpg")}/>
      </div>
      <div className='right-container'>
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
        <TodoList todos={todos} newTodos = {newTodos} setTodos={setTodos}/>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !todos.length) && <p>¡Crea tu primer TODO!</p>}
      </div>
      </main>
    )
}
export{MainTodo};