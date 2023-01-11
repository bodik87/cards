import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ isActive, onClick, value }) => {
  const buttonStyles = !isActive ? styles.button : styles.button_active;

  return (
    <div className={buttonStyles} onClick={onClick}>
      {value}
    </div>
  );
};
