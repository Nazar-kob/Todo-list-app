import React from "react";
import style from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = ({ todoList, deleteTodo }) => {
  const todoListComponents = todoList.map(({ id, text }) => {
    return <Todo key={id} textTodo={text} deleteTodo={deleteTodo} id={id} />;
  });

  return (
    <>
      {todoListComponents.length > 0 ? (
        todoListComponents
      ) : (
        <h1 className={style.todoTitle}>Todo list is empty</h1>
      )}
    </>
  );
};

export default TodoList;
