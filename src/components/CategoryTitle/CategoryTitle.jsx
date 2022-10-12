import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { DELETE_CATEGORY, RENAME_CATEGORY } from "../../assets/constants";
import { updateActiveValueAC } from "../../store/reducers/actions";
import { Modal } from "../Modal";
import { ModalDelete } from "../ModalDelete";
import styles from './CategoryTitle.module.scss'
import { getRandomColor } from "../../utils/getRandomColor";

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

  // Modal delete
  const [modalDeleteVisible, setModaDeletelVisible] = useState(false);
  const toggleModalDeleteVisible = () => setModaDeletelVisible(!modalDeleteVisible)

  const updateSelectedCategory = (text) => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedFilteredCategory = {
      ...filteredCategory,
      name: text,
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  const randomColor = getRandomColor()

  const test = () => {
    console.log('Удалено');
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
      <ModalDelete
        modalTitle={DELETE_CATEGORY}
        visible={modalDeleteVisible}
        toggleModalVisible={toggleModalDeleteVisible}
        func={test}
      />
      <div className={styles.categoryTitle}>
        <input
          disabled
          className={styles.categoryTitle_input}
          value={title}
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