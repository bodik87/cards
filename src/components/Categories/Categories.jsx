import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VerticalCarousel } from '../VerticalCarousel'
import { Modal } from "../Modal";
import { Button, ButtonType } from '../Button'
import { ADD_CATEGORY, VC_ITEM_HEIGHT, VC_MAX_ITEMS_COUNT } from '../../assets/constants'
import { updateActiveCategoryAC, updateCategoriesAC } from '../../store/reducers/actions';
import { Link } from 'react-router-dom';
import { path } from '../../path';
import { createNewCategory } from '../../utils/createNewCategory';
import styles from './Categories.module.scss'

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(store => store.categoryList);

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible)

  const addNewCategory = (title) => {
    const newCategory = createNewCategory(title)
    if (title.trim().length > 0) {
      const updatedCategoryList = [...categories, newCategory]
      dispatch(updateCategoriesAC(updatedCategoryList))
      dispatch(updateActiveCategoryAC(newCategory.id));
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
        <Button
          value={ADD_CATEGORY}
          type={ButtonType.ORANGE}
          onClick={toggleModalVisible}
        />

        <Link to={path.testing}>TESTING</Link>

      </div>
    </>
  )
}