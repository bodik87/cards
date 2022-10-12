import React from "react";
import { Button, ButtonType } from "../Button";

export const CategoryItem = ({
  isActive,
  value,
  onClick,
  color,
}) => {

  return (
    <>
      {isActive ?
        <Button
          isActive={isActive}
          onClick={onClick}
          value={value}
          color={color}
        />
        :
        <Button
          type={ButtonType.UNACTIVE}
          onClick={onClick}
          value={value}
        />}
    </>
  );
};
