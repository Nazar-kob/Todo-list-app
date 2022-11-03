import React from "react";
import { RiTodoFill } from "react-icons/ri";
import { BiChevronDownCircle, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import style from "./Todo.module.css";
import { actions } from "../../redux/reducers/todoListReduser";

const Todo = ({ isDone, text, id }) => {
  const dipathcher = useDispatch();

  const styleTodo = isDone ? style.completedTodo : "";
  return (
    <div
      className={`${style.todo} ${styleTodo}`}
      onDoubleClick={() => dipathcher(actions.deleteTodo(id))}
    >
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{text}</div>
      <BiChevronDownCircle
        className={style.checkIcon}
        onClick={() => dipathcher(actions.changeTodo(id))}
      />
      <BiTrash
        className={style.deleteIcon}
        onClick={() => dipathcher(actions.deleteTodo(id))}
      />
    </div>
  );
};

export default Todo;
