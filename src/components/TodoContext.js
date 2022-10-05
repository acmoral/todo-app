import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext();

function TodoProvider(props) {
   // Desestructuramos los nuevos datos de nustro custom hook
   const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);
  const [valueToadd,setvalueToadd] = React.useState('');
  const [searchValue,setSearchValue]=React.useState('');
  const [openModal,setOpenModal] = React.useState(false);
  let newTodos = todos.filter( element => element.text.toLowerCase().includes(searchValue.toLowerCase()));
  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return (
    <TodoContext.Provider value={{
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
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };