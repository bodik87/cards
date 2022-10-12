import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt } from 'react-icons/bi'
import { RENAME_CATEGORY } from "../../assets/constants";
import { updateActiveValueAC } from "../../store/reducers/actions";
import { Modal } from "../Modal";
import styles from './CategoryTitle.module.scss'

export const CategoryTitle = () => {
  const dispatch = useDispatch();

  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(categories[activeCategoryIndex]?.name)
  }, [categories, activeCategoryIndex])

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible)

  const updateSelectedCategory = (text) => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedFilteredCategory = {
      ...filteredCategory,
      name: text,
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  return (
    <>
      <Modal
        modalTitle={RENAME_CATEGORY}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={updateSelectedCategory}
        payload={title}
      />
      <div className={styles.categoryTitle}>
        <input
          disabled
          className={styles.categoryTitle_input}
          value={title}
        />
        <BiEditAlt
          size={30}
          color={'black'}
          onClick={toggleModalVisible}
        />
      </div>
    </>
  )
}