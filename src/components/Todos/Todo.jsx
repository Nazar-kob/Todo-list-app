import React from "react";
import { RiTodoFill } from "react-icons/ri";
import style from "./Todo.module.css";

const Todo = ({ textTodo, deleteTodo, id }) => {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(id)}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{textTodo}</div>
    </div>
  );
};

export default Todo;
