
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
  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
  // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch(error) {
      // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
    }, 1000);
  });
  
  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  };

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  // Desestructuramos los nuevos datos de nustro custom hook
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);
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
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !todos.length) && <p>¡Crea tu primer TODO!</p>}
      </div>
      </main>
      <footer>
        <p>created by Andrea M.</p>
      </footer>
    </React.Fragment>
    );
   
}

export default App;
