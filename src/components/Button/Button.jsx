import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const ButtonType = { ICON_RIGHT: 'IconRight', ICON_LEFT: 'IconLeft' };

export const Button = ({
  isActive,
  onClick,
  type,
  icon,
  color,
  value
}) => {

  const defaultStyle = 'styles.button'
  const buttonStyles = !isActive ? styles.button : styles.button_active;

  if (type === ButtonType.ICON_LEFT) {
    return (
      <div onClick={onClick} className={styles.button_iconLeft} >
        {icon}
        <p>{value}</p>
      </div>
    );
  } else if (type === ButtonType.ICON_RIGHT) {
    return (
      <div onClick={onClick} className={styles.button_iconRight}>
        <p>{value}</p>
        {icon}
      </div>
    );
  }
  return (
    <div onClick={onClick} className={buttonStyles}>
      <p>{value}</p>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};