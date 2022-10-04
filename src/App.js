
import React from 'react';
import './styles/main.css'
import "./styles/taskBar.css"
import "./styles/inputSection.css"
import "./styles/footer.css"
import "./styles/right-container.css"
import { MainTodo } from './components/MainTodo.js';
import { FooterTodo } from './components/FooterTodo.js';
import { TodoContext } from './components/TodoContext.js';
import { TodoCounter } from './components/TodoCounter';
function App() {
 
  return (
    <React.Fragment>
      <TodoContext.Consumer>
      {({
          loading,
          error,
          todos,
          valueToadd,
          setvalueToadd,
          searchValue,
          setSearchValue,
          setTodos,
          newTodos,
        }) => (
        <><TodoCounter todos={todos} /><MainTodo
            loading={loading}
            error={error}
            valueToadd={valueToadd}
            setvalueToadd={setvalueToadd}
            setTodos={setTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            newTodos={newTodos}
            todos={todos} /></>)}
      </TodoContext.Consumer>
        
      <FooterTodo />
    </React.Fragment>
    );
   
}

export default App;
