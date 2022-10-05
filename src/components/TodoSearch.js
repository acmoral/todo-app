import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from './TodoContext';

function TodoSearch(){
    const {searchValue,setSearchValue}=React.useContext(TodoContext);
    const OnSearchValueChange = (event)=>{
        setSearchValue(event.target.value);
        
    }
    return (
        <input  className="TodoSearch"type='text 'placeholder='Buscar Todo' value={searchValue} onChange={OnSearchValueChange}>
        </input>
    )
}
export {TodoSearch};