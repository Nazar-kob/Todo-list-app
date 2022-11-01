import React, { useState } from "react";

import Button from "../UI/Button";
import style from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [textTodo, setTextTodo] = useState("");

  const handlerSubmitBtn = (event) => {
    event.preventDefault();
    if (!!textTodo.trim().length) {
      addTodo(textTodo);
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
