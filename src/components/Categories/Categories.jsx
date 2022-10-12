import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VerticalCarousel } from '../VerticalCarousel'
import { Modal } from "../Modal";
import { Button } from '../Button'
import { ADD_CATEGORY, VC_ITEM_HEIGHT, VC_MAX_ITEMS_COUNT } from '../../assets/constants'
import styles from './Categories.module.scss'
import { updateActiveCategoryAC, updateCategoriesAC } from '../../store/reducers/actions';

export const Categories = () => {
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
    <>
      <Modal
        modalTitle={ADD_CATEGORY}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={addNewCategory}
      />
      <div className={styles.categories}>
        <VerticalCarousel
          itemsArray={categories}
          itemHeight={VC_ITEM_HEIGHT}
          maxItemsCount={VC_MAX_ITEMS_COUNT}
        />
        <Button value={ADD_CATEGORY} onClick={toggleModalVisible} />
      </div>
    </>
  )
}