
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
var items  = require('./data.json');
function App() {
  return (
    <React.Fragment>
      <TodoCounter items={items}/>
      <TodoSearch />
      <TodoList items={items}/>
      <CreateTodoButton/>
    </React.Fragment>
    );
}

export default App;
