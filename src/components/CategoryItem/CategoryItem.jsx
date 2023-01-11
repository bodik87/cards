import React from "react";
import { Button } from "../ControlPanel/Button";

export const CategoryItem = ({ isActive, value, onClick }) => {
  return (
    <React.Fragment>
      {isActive ? (
        <Button isActive={isActive} onClick={onClick} value={value} />
      ) : (
        <Button onClick={onClick} value={value} />
      )}
    </React.Fragment>
  );
};
