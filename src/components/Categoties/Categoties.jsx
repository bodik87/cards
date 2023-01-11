import React from "react";
import { useSelector } from "react-redux";
import { CategoryItemContainer } from "../containers/CategoryItemContainer";
import styles from "./Categories.module.scss";

export const Categories = () => {
  const { categories } = useSelector((store) => store.categoryList);
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <CategoryItemContainer
          key={category.id}
          category={category}
          id={category.id}
        />
      ))}
    </div>
  );
};
