import React from "react";
import { BiRefresh, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";

import { actions } from "../../redux/reducers/todoListReduser";
import Button from "../UI/Button";
import style from "./TodoActions.module.css";

const TodoActions = ({ countIsDoneTodos }) => {
  const dispatcher = useDispatch();

  return (
    <div className={style.btnsElement}>
      <Button
        onClick={() => dispatcher(actions.clearTodo())}
        title="Refresh all todos"
      >
        <BiRefresh />
      </Button>
      <Button
        onClick={() => dispatcher(actions.clearTodoIsDone())}
        title="Delete all done"
        disabled={!countIsDoneTodos}
      >
        <BiTrash />
      </Button>
    </div>
  );
};

export default TodoActions;
