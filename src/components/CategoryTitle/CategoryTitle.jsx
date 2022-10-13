import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { DELETE_CATEGORY, RENAME_CATEGORY } from "../../assets/constants";
import { deleteCategoryAC, updateActiveCategoryAC, updateActiveValueAC, updateCategoriesAC } from "../../store/reducers/actions";
import { Modal } from "../Modal";
import { ModalDelete } from "../ModalDelete";
import styles from './CategoryTitle.module.scss'
import { getRandomColor } from "../../utils/getRandomColor";

export const CategoryTitle = () => {
  const dispatch = useDispatch();

  const { categories, activeCategoryId } = useSelector(state => state.categoryList);

  const activeCategory = categories.filter(category => category.id === activeCategoryId)[0]

  // const [title, setTitle] = useState(activeCategory.name)

  // useEffect(() => {
  //   setTitle(activeCategory.name)
  // }, [activeCategoryId])

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
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  const deleteCategory = () => {
    const selectedCategory = { ...activeCategory }
    const { id } = selectedCategory
    dispatch(deleteCategoryAC(id))
    // dispatch(updateActiveCategoryAC(categories.id))
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
          size={30}
          color={'black'}
          onClick={toggleModalVisible}
        />
        <MdOutlineDeleteOutline
          size={30}
          color={'black'}
          onClick={toggleModalDeleteVisible}
        />
      </div>
    </>
  )
}