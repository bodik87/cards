import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_CATEGORY, GREETING_HELLO, GREETING_INSTRUCTION, GREETING_NAME, GREETING_NAME_DESCR } from '../../assets/constants'
import { updateActiveCategoryAC, updateCategoriesAC } from '../../store/reducers/actions'
import { Button, ButtonType } from '../Button'
import { Modal } from '../Modal/Modal'
import { Logo } from '../SVG'
import styles from './EmptyCategories.module.scss'

export const EmptyCategories = () => {

  const dispatch = useDispatch();
  const { categories } = useSelector(store => store.categoryList);

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible)

  const clearArray = new Array(6).fill('')
  const addNewCategory = (title) => {
    const newCategory = {
      id: categories.length,
      name: title.trim(),
      data: clearArray,
      translate: clearArray,
      practice: "",
    }
    if (title.trim().length > 0) {
      const updatedCategoryList = [...categories, newCategory]
      dispatch(updateCategoriesAC(updatedCategoryList))
      dispatch(updateActiveCategoryAC(categories.length));
    }
  }

  return (
    <div className={styles.emptyCategories}>
      <Modal
        modalTitle={ADD_CATEGORY}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={addNewCategory}
      />
      <Logo />
      <h1>{GREETING_HELLO}</h1>
      <h2>{GREETING_NAME}</h2>
      <h3>{GREETING_NAME_DESCR}</h3>
      <p className={styles.emptyCategories_instruction}>{GREETING_INSTRUCTION}</p>
      <Button value={ADD_CATEGORY} type={ButtonType.UNACTIVE} onClick={toggleModalVisible} />
    </div>
  )
}