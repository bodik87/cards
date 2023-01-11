import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Card } from "../../components/Card";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import styles from "./HomePage.module.scss";
import { updateActiveValueAC } from "../../store/reducers/actions";
import { useDebounce } from "../../hooks/useDebounce";
import { PRACTICE_TEXTAREA_PLACEHOLDER } from "../../assets/constants";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { categories, activeCategoryId } = useSelector(
    (state) => state.categoryList
  );
  const activeCategory = categories.filter(
    (category) => category.id === activeCategoryId
  )[0];

  const [practice, setPractice] = useState("");
  useEffect(() => {
    setPractice(activeCategory.practice);
  }, [categories, activeCategoryId]);

  const updateSelectedCategoryPractice = (e) => {
    const updatedCategory = {
      ...activeCategory,
      practice: e.target.value,
    };
    dispatch(updateActiveValueAC(updatedCategory));
  };

  const debouncedInput = useDebounce(updateSelectedCategoryPractice, 500);

  const handleChangePracticeText = (e) => {
    setPractice(e.target.value);
    debouncedInput(e);
  };

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
      <textarea
        value={practice}
        onChange={handleChangePracticeText}
        className={styles.textArea}
        placeholder={PRACTICE_TEXTAREA_PLACEHOLDER}
      />
    </PageContainer>
  );
};
