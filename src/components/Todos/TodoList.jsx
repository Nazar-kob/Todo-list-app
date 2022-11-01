import React from "react";
import style from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = ({ todoList, deleteTodo, makeIsDoneTodo }) => {
  const todoListComponents = todoList.map((todo) => {
    return (
      <Todo
        key={todo.id}
        deleteTodo={deleteTodo}
        makeIsDoneTodo={makeIsDoneTodo}
        {...todo}
      />
    );
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
