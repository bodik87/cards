import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Card } from "../../components/Card";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const { categories, activeCategoryId } = useSelector(
    (state) => state.categoryList
  );
  const activeCategory = categories.filter(
    (category) => category.id === activeCategoryId
  )[0];

  return (
    <PageContainer>
      <div className={styles.homepage_cards}>
        {activeCategory &&
          activeCategory.wordsData.map((el, i) => (
            <Card
              key={nanoid()}
              words={activeCategory.wordsData}
              translates={activeCategory.translatesData}
              index={i}
            />
          ))}
      </div>
    </PageContainer>
  );
};
