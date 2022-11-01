import React, { useState } from 'react';
import './App.css';

import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodoActions';

function App() {

  const [todoList, setTodoList] = useState([])
  const [countId, setCountId] = useState(1)

  const addTodoHandler = (text) => {
    let newTodo = { id: countId, text: text, isDone: false }
    setTodoList((curentTodoList) => [...curentTodoList, newTodo])
    setCountId((c) => c + 1)
  }

  const deleteTodoHandler = (idx) => {
    setTodoList(todoList.filter(({ id }) => idx !== id))
  }

  const refreshTodoListHendler = () => {
    setTodoList([])
  }

  const removeAllTodoIsDoneHandler = () => {
    setTodoList(todoList.filter(({ isDone }) => !isDone))
  }

  const IsDoneHandler = (id) => {
    setTodoList(todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      }
      return { ...todo }
    }))
  }

  const countIsDoneTodosHandler = todoList.filter(({ isDone }) => isDone).length;






  return (
    <div className="App">
      <h1 className="todo-title">Todo list</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todoList.length > 0 && (
        <TodoActions
          refreshTodoList={refreshTodoListHendler}
          removeAllTodoIsDone={removeAllTodoIsDoneHandler}
          countIsDoneTodos={countIsDoneTodosHandler} />
      )}
      <TodoList todoList={todoList} deleteTodo={deleteTodoHandler} makeIsDoneTodo={IsDoneHandler} />
      {!!countIsDoneTodosHandler && <h2>You have completed {`${countIsDoneTodosHandler} ${countIsDoneTodosHandler > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App;
