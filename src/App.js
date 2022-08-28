
import React from 'react';
import {TodoCounter} from './components/TodoCounter.js';
import {TodoAddTask} from './components/TodoAddTask.js';
import {TodoSearch} from './components/TodoSearch.js';
import {TodoList} from './components/TodoList.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';
import './styles/main.css'
import "./styles/taskBar.css"
import "./styles/inputSection.css"
import "./styles/footer.css"
import "./styles/right-container.css"

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  
  const [todos,setTodos] = useLocalStorage('TODOS_V2', []);
  const [valueToadd,setvalueToadd] = React.useState('');
  const [searchValue,setSearchValue]=React.useState('');
  let newTodos = todos.filter( element => element.text.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    <React.Fragment>
      <header>
        <TodoCounter items={todos}/>
      </header>
      <main>
      <div className='task-bar'>
        <div className='input-section'>
          <TodoAddTask valueToadd={valueToadd} setvalueToadd={setvalueToadd}/>
          <CreateTodoButton setTodos={setTodos} todos={todos} setvalueToadd={setvalueToadd} valueToadd={valueToadd}/>
        </div>    
        <img src={require("./assets/girl.jpg")}/>
      </div>
      <div className='right-container'>
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
        <TodoList todos={todos} newTodos = {newTodos} setTodos={setTodos}/>
      </div>
      </main>
      <footer>
        <p>created by Andrea M.</p>
      </footer>
    </React.Fragment>
    );
   
}

export default App;
