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
  const isAactive = index === activeCategoryIndex

  // Change category name
  const [categoryName, setCategoryName] = useState(category.name);
  const handleChangeName = (e) => {
    setCategoryName(e.target.value);
  }
  const changeCategoryName = () => {
    // if (categoryName.length !== 0)
    if (category.name !== categoryName) {
      const updatedCategoryList = updateCategoryList(categories, id, categoryName);
      dispatch(updateCategoriesAC(updatedCategoryList));
    }
    // return cat.name
  };
  // Change active category
  const changeActiveCategory = (i) => !isAactive && dispatch(updateActiveCategoryAC(i))

  return (
    <CategoryItem
      isActive={isAactive}
      value={categoryName}
      onChange={handleChangeName}
      onClick={() => changeActiveCategory(index)}
      onBlur={changeCategoryName}
      placeholder={CATEGORY_ITEM_PLACEHOLDER}
    />
  );
};
