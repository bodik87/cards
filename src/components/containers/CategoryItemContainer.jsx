import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveCategoryAC } from "../../store/reducers/actions";
import { getRandomColor } from "../../utils/getRandomColor";
import { CategoryItem } from "../CategoryItem";

export const CategoryItemContainer = ({ category, index }) => {

  const dispatch = useDispatch();
  const { activeCategoryIndex } = useSelector(state => state.categoryList);
  const isAactive = index === activeCategoryIndex
  const changeActiveCategory = (i) => dispatch(updateActiveCategoryAC(i))
  const randomColor = getRandomColor()

  return (
    <CategoryItem
      isActive={isAactive}
      value={category.name}
      color={randomColor}
      onClick={() => changeActiveCategory(index)}
    />
  );
};
