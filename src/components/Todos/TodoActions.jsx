import React from "react";
import { BiRefresh, BiTrash } from "react-icons/bi";
import Button from "../UI/Button";
import style from "./TodoActions.module.css";

const TodoActions = ({
  refreshTodoList,
  removeAllTodoIsDone,
  countIsDoneTodos,
}) => {
  return (
    <div className={style.btnsElement}>
      <Button onClick={refreshTodoList} title="Refresh all todos">
        <BiRefresh />
      </Button>
      <Button
        onClick={removeAllTodoIsDone}
        title="Delete all done"
        disabled={!countIsDoneTodos}
      >
        <BiTrash />
      </Button>
    </div>
  );
};

export default TodoActions;
