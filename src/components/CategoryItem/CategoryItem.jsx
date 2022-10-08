import React from "react";
import styles from "./CategoryItem.module.scss";

export const CategoryItem = ({
  isActive,
  value,
  onChange,
  onClick,
  onBlur,
}) => {

  const categoryInputStyles = isActive ? styles.categoryInput : styles.categoryInput_active;

  return (

    <input
      className={categoryInputStyles}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
    />
  );
};
