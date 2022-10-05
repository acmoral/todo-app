
import React from 'react';
import './styles/main.css'
import "./styles/taskBar.css"
import "./styles/inputSection.css"
import "./styles/CreateButton.css"
import "./styles/footer.css"
import "./styles/right-container.css"
import "./styles/Modal.css"
import { MainTodo } from './components/MainTodo.js';
import { FooterTodo } from './components/FooterTodo.js';
import { TodoContext } from './components/TodoContext.js';
import { TodoCounter } from './components/TodoCounter';
import {Modal} from './components/Modal';
function App() {
  const{
      loading,
          error,
          todos,
          valueToadd,
          setvalueToadd,
          searchValue,
          setSearchValue,
          setTodos,
          newTodos,
          openModal,
          setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter todos={todos} /><MainTodo
            loading={loading}
            error={error}
            todos={todos} />
        {openModal && (
          <Modal></Modal>
        )}
      <FooterTodo />
    </React.Fragment>
    );
   
}

export default App;
