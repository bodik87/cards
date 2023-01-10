import React from "react";
import { Button } from "../Button";

export const CategoryItem = ({ isActive, value, onClick, color }) => {
  return (
    <>
      {isActive ? (
        <Button isActive={isActive} onClick={onClick} value={value} />
      ) : (
        <Button onClick={onClick} value={value} />
      )}
    </>
  );
};
