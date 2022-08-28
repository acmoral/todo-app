import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}){
    
    const OnSearchValueChange = (event)=>{
        setSearchValue(event.target.value);
        
    }
    return (
        <input  className="TodoSearch"type='text 'placeholder='Buscar Todo' value={searchValue} onChange={OnSearchValueChange}>
        </input>
    )
}
export {TodoSearch};