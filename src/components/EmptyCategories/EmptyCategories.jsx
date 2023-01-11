import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CATEGORY,
  GREETING_HELLO,
  GREETING_INSTRUCTION,
  GREETING_NAME,
  GREETING_NAME_DESCR,
} from "../../assets/constants";
import {
  updateActiveCategoryAC,
  updateCategoriesAC,
} from "../../store/reducers/actions";
import { createNewCategory } from "../../utils/createNewCategory";
import { Button } from "../ControlPanel/Button";
import { Modal } from "../Modals/Modal/Modal";
import styles from "./EmptyCategories.module.scss";

export const EmptyCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categoryList);

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible);

  const addNewCategory = (title) => {
    const newCategory = createNewCategory(title);
    if (title.trim().length > 0) {
      const updatedCategoryList = [...categories, newCategory];
      dispatch(updateCategoriesAC(updatedCategoryList));
      dispatch(updateActiveCategoryAC(newCategory.id));
    }
  };

  return (
    <div className={styles.emptyCategories}>
      <Modal
        modalTitle={ADD_CATEGORY}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={addNewCategory}
      />
      <h1>{GREETING_HELLO}</h1>
      <h2>{GREETING_NAME}</h2>
      <h3>{GREETING_NAME_DESCR}</h3>
      <p className={styles.emptyCategories_instruction}>
        {GREETING_INSTRUCTION}
      </p>
      <Button value={ADD_CATEGORY} onClick={toggleModalVisible} />
    </div>
  );
};
