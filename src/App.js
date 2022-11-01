import React, { useState } from 'react';
import './App.css';

import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList'

function App() {

  const [todoList, setTodoList] = useState([])
  const [countId, setCountId] = useState(1)

  const addTodoHandler = (text) => {
    let newTodo = { id: countId, text: text }
    setTodoList((curentTodoList) => [...curentTodoList, newTodo])
    setCountId((c) => c + 1)
  }

  const deleteTodoHandler = (idx) => {
    setTodoList(todoList.filter(({ id }) => idx !== id))
  }




  return (
    <div className="App">
      <h1 className="todo-title">Todo list</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todoList={todoList} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
