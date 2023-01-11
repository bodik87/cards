import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../Modals/Modal";
import { ModalDelete } from "../../Modals/ModalDelete";
import { Button } from "../Button";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  RENAME_CATEGORY,
} from "../../../assets/constants";
import {
  deleteCategoryAC,
  updateActiveCategoryAC,
  updateActiveValueAC,
  updateCategoriesAC,
} from "../../../store/reducers/actions";

import { createNewCategory } from "../../../utils/createNewCategory";
import styles from "./ControlButtons.module.scss";

export const ControlButtons = () => {
  const dispatch = useDispatch();
  // const { categories } = useSelector((store) => store.categoryList);

  const { categories, activeCategoryId } = useSelector(
    (state) => state.categoryList
  );

  const activeCategory = categories.filter(
    (category) => category.id === activeCategoryId
  )[0];

  // Modal
  // const [modalVisible, setModalVisible] = useState(false);
  // const toggleModalVisible = () => setModalVisible(!modalVisible);

  // Modal delete
  const [modalDeleteVisible, setModaDeletelVisible] = useState(false);
  const toggleModalDeleteVisible = () =>
    setModaDeletelVisible(!modalDeleteVisible);

  const renameCategory = (text) => {
    const filteredCategory = categories.filter(
      (el) => el.id === activeCategoryId
    )[0];
    const updatedFilteredCategory = {
      ...filteredCategory,
      name: text,
    };
    if (activeCategory.name !== text)
      dispatch(updateActiveValueAC(updatedFilteredCategory));
  };

  const deleteCategory = () => {
    const selectedCategory = { ...activeCategory };
    const { id } = selectedCategory;
    if (categories[0].id !== id) {
      dispatch(deleteCategoryAC(id));
      dispatch(updateActiveCategoryAC(categories[0].id));
    } else if (categories.length > 1) {
      dispatch(deleteCategoryAC(id));
      dispatch(updateActiveCategoryAC(categories[1].id));
    } else {
      dispatch(updateCategoriesAC([]));
      dispatch(updateActiveCategoryAC(null));
    }
  };

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
    <>
      <Modal
        modalTitle={ADD_CATEGORY}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={addNewCategory}
      />
      <Modal
        modalTitle={RENAME_CATEGORY}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={renameCategory}
        payload={activeCategory.name}
      />
      <ModalDelete
        modalTitle={DELETE_CATEGORY}
        visible={modalDeleteVisible}
        toggleModalVisible={toggleModalDeleteVisible}
        func={deleteCategory}
      />
      <div className={styles.buttonsRow}>
        <Button type="small" onClick={toggleModalDeleteVisible} value={"-"} />
        <Button type="small" onClick={toggleModalVisible} value={"*"} />
        <Button
          type="small"
          onClick={toggleModalVisible}
          value={ADD_CATEGORY}
        />
      </div>
    </>
  );
};
