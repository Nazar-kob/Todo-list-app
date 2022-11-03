import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../UI/Button";
import style from "./TodoForm.module.css";
import { actions } from "../../redux/reducers/todoListReduser";

const TodoForm = () => {
  const [textTodo, setTextTodo] = useState("");
  const dsipatcher = useDispatch();

  const handlerSubmitBtn = (event) => {
    event.preventDefault();

    if (!!textTodo.trim().length) {
      dsipatcher(actions.addTodo(textTodo));
      setTextTodo("");
    }
  };

  return (
    <>
      <form onSubmit={handlerSubmitBtn} className={style.todoForm}>
        <input
          className={style.todoInputText}
          placeholder="Enter new todo"
          type="text"
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
        />
        <Button
          className={style.todoButtonSubmit}
          type="submit"
          title="Add new todo"
        >
          Add todo
        </Button>
      </form>
    </>
  );
};

export default TodoForm;
