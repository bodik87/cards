import React from "react";
import { Button, ButtonType } from "../Button";

export const CategoryItem = ({
  isActive,
  value,
  onChange,
  onClick,
  onBlur,
  color,
}) => {

  return (
    <>
      {isActive ?
        <Button
          isActive={isActive}
          onClick={onClick}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          color={color}
        />
        :
        <Button
          type={ButtonType.UNACTIVE}
          onClick={onClick}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />}
    </>
  );
};
