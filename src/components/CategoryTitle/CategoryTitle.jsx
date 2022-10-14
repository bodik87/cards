import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt } from 'react-icons/bi'
import { deleteCategoryAC, updateActiveCategoryAC, updateActiveValueAC, updateCategoriesAC } from "../../store/reducers/actions";
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { Modal } from "../Modal";
import { ModalDelete } from "../ModalDelete";
import { DELETE_CATEGORY, PRACTICE, RENAME_CATEGORY } from "../../assets/constants";
import { getRandomColor } from "../../utils/getRandomColor";
import styles from './CategoryTitle.module.scss'
import { Link, useLocation } from "react-router-dom";
import { path } from "../../path";
import { Button, ButtonType } from "../Button";

export const CategoryTitle = () => {
  const dispatch = useDispatch();

  // Location
  const location = useLocation()
  const showPracticeButton = location.pathname !== '/practice'

  const { categories, activeCategoryId } = useSelector(state => state.categoryList);

  const activeCategory = categories.filter(category => category.id === activeCategoryId)[0]

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible)

  // Modal delete
  const [modalDeleteVisible, setModaDeletelVisible] = useState(false);
  const toggleModalDeleteVisible = () => setModaDeletelVisible(!modalDeleteVisible)

  const renameCategory = (text) => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryId)[0]
    const updatedFilteredCategory = {
      ...filteredCategory,
      name: text,
    }
    if (activeCategory.name !== text) dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  const deleteCategory = () => {
    const selectedCategory = { ...activeCategory }
    const { id } = selectedCategory
    if (categories[0].id !== id) {
      dispatch(deleteCategoryAC(id))
      dispatch(updateActiveCategoryAC(categories[0].id))
    } else if (categories.length > 1) {
      dispatch(deleteCategoryAC(id))
      dispatch(updateActiveCategoryAC(categories[1].id))
    } else {
      dispatch(updateCategoriesAC([]))
      dispatch(updateActiveCategoryAC(null))
    }
  }

  const randomColor = getRandomColor()

  return (
    <>
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
      <div className={styles.categoryTitle}>
        <input
          disabled
          className={styles.categoryTitle_input}
          value={activeCategory.name}
          style={{ 'color': randomColor && randomColor }}
        />
        <BiEditAlt
          size={28}
          onClick={toggleModalVisible}
          className={styles.btn}
        />
        <MdOutlineDeleteOutline
          size={28}
          onClick={toggleModalDeleteVisible}
          className={styles.btn}
        />
        <Link to={path.practice}>{showPracticeButton && <Button value={PRACTICE} type={ButtonType.ORANGE} />}</Link>
      </div>
    </>
  )
}