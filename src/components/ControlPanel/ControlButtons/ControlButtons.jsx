import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../Modals/Modal";
import { ModalDelete } from "../../Modals/ModalDelete";
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
import { EditIcon } from "../../Icons/EditIcon";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { AddIcon } from "../../Icons/AddIcon";

export const ControlButtons = () => {
  const dispatch = useDispatch();
  const { categories, activeCategoryId } = useSelector(
    (state) => state.categoryList
  );
  const activeCategory = categories.filter(
    (category) => category.id === activeCategoryId
  )[0];

  // Modals for cedit ategory
  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal);

  const [addModal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!addModal);

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

  const addNewCategory = (title) => {
    const newCategory = createNewCategory(title);
    if (title.trim().length > 0) {
      const updatedCategoryList = [...categories, newCategory];
      dispatch(updateCategoriesAC(updatedCategoryList));
      dispatch(updateActiveCategoryAC(newCategory.id));
    }
  };

  return (
    <React.Fragment>
      <ModalDelete
        modalTitle={DELETE_CATEGORY}
        visible={deleteModal}
        toggleModalVisible={toggleDeleteModal}
        func={deleteCategory}
      />
      <Modal
        modalTitle={RENAME_CATEGORY}
        visible={editModal}
        toggleModalVisible={toggleEditModal}
        func={renameCategory}
        payload={activeCategory.name}
      />
      <Modal
        modalTitle={ADD_CATEGORY}
        visible={addModal}
        toggleModalVisible={toggleAddModal}
        func={addNewCategory}
      />

      <div className={styles.buttonsRow}>
        <div onClick={toggleDeleteModal}>
          <DeleteIcon width={25} height={25} />
        </div>
        <div onClick={toggleEditModal}>
          <EditIcon width={25} height={25} />
        </div>
        <div onClick={toggleAddModal}>
          <AddIcon width={25} height={25} />
        </div>
      </div>
    </React.Fragment>
  );
};
