import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY_ITEM_PLACEHOLDER } from "../../assets/constants";
import {
  updateActiveCategoryAC,
  updateCategoriesAC,
} from "../../store/reducers/actions";
import { CategoryItem } from "../CategoryItem";

export const CategoryItemContainer = ({ category, id, index }) => {
  // Store
  const dispatch = useDispatch();
  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const updateCategoryList = (arr, id, name) =>
    arr.map(el => el.id === id ? { ...el, name: name } : el);
  const isUnactive = index !== activeCategoryIndex

  // Change category name
  const [categoryName, setCategoryName] = useState(category.name);
  const handleChangeName = (e) => {
    setCategoryName(e.target.value);
  }
  const changeCategoryName = () => {
    if (category.name !== categoryName) {
      const updatedCategoryList = updateCategoryList(categories, id, categoryName);
      dispatch(updateCategoriesAC(updatedCategoryList));
    }
  };
  // Change active category
  const changeActiveCategory = (i) => isUnactive && dispatch(updateActiveCategoryAC(i))

  return (
    <CategoryItem
      isActive={isUnactive}
      value={categoryName}
      onChange={handleChangeName}
      onClick={() => changeActiveCategory(index)}
      onBlur={changeCategoryName}
      placeholder={CATEGORY_ITEM_PLACEHOLDER}
    />
  );
};
