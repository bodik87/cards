import React from "react";
import { Button } from "../Button";

export const CategoryItem = ({
  isActive,
  value,
  onChange,
  onClick,
  onBlur,
}) => {

  return (
    <Button
      isActive={isActive}
      onClick={onClick}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
