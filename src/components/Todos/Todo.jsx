import React from "react";
import { RiTodoFill } from "react-icons/ri";
import { BiChevronDownCircle, BiTrash } from "react-icons/bi";
import style from "./Todo.module.css";

const Todo = ({ text, deleteTodo, id, isDone, makeIsDoneTodo }) => {
  const styleTodo = isDone ? style.completedTodo : "";
  return (
    <div
      className={`${style.todo} ${styleTodo}`}
      onDoubleClick={() => deleteTodo(id)}
    >
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{text}</div>
      <BiChevronDownCircle
        className={style.checkIcon}
        onClick={() => makeIsDoneTodo(id)}
      />
      <BiTrash className={style.deleteIcon} onClick={() => deleteTodo(id)} />
    </div>
  );
};

export default Todo;
