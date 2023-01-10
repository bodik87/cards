import React from "react";
import { CategoryButton } from "../CategoryButton";

export const CategoryItem = ({ isActive, value, onClick }) => {
  return (
    <>
      {isActive ? (
        <CategoryButton isActive={isActive} onClick={onClick} value={value} />
      ) : (
        <CategoryButton onClick={onClick} value={value} />
      )}
    </>
  );
};
