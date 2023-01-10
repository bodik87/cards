import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  MINI_CARDS_PLACEHOLDER,
  PRACTICE_TEXTAREA_PLACEHOLDER,
} from "../../assets/constants";
import { updateActiveValueAC } from "../../store/reducers/actions";
import { useDebounce } from "../../hooks/useDebounce";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import styles from "./PracticePage.module.scss";

export const PracticePage = () => {
  const { categories, activeCategoryId } = useSelector(
    (state) => state.categoryList
  );
  const activeCategory = categories.filter(
    (category) => category.id === activeCategoryId
  )[0];

  const dispatch = useDispatch();
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
      <div className={styles.practice_miniCards}>
        {activeCategory.wordsData.map((el) => (
          <input
            key={nanoid()}
            defaultValue={el}
            disabled="disabled"
            className={styles.practice_miniCard}
            placeholder={MINI_CARDS_PLACEHOLDER}
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
