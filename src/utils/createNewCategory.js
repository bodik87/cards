import { nanoid } from "@reduxjs/toolkit";

export const createNewCategory = (title) => {
  const emptyArray = new Array(9).fill("");
  const newCategory = {
    id: nanoid(),
    name: title.trim(),
    wordsData: emptyArray,
    translatesData: emptyArray,
    practice: "",
  };
  return newCategory;
};
