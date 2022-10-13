import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveCategoryAC } from "../../store/reducers/actions";
import { getRandomColor } from "../../utils/getRandomColor";
import { CategoryItem } from "../CategoryItem";

export const CategoryItemContainer = ({ category, id }) => {

  const dispatch = useDispatch();
  const { activeCategoryId } = useSelector(state => state.categoryList);
  const isAactive = id === activeCategoryId
  const changeActiveCategory = (i) => !isAactive && dispatch(updateActiveCategoryAC(i))

  const randomColor = getRandomColor()

  return (
    <CategoryItem
      isActive={isAactive}
      value={category.name}
      color={randomColor}
      onClick={() => changeActiveCategory(id)}
    />
  );
};
