import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  const { children, onClick, title, disabled = false } = props;
  return (
    <button
      {...props}
      onClick={onClick}
      className={style.btn}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
