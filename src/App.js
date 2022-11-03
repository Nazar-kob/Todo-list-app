import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';

import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodoActions';

function App() {

  const todos = useSelector((store) => store.todo);

  const countIsDoneTodosHandler = todos.filter(({ isDone }) => isDone).length;

  return (
    <div className="App">
      <h1 className="todo-title">Todo app</h1>
      <TodoForm />
      {todos.length > 0 && (
        <TodoActions countIsDoneTodos={countIsDoneTodosHandler} />
      )}
      <TodoList todos={todos} />
      {!!countIsDoneTodosHandler && <h2>You have completed {`${countIsDoneTodosHandler} ${countIsDoneTodosHandler > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App;
