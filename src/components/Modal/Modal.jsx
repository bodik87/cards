import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, CLOSE, MODAL_INPUT_PLACEHOLDER } from '../../assets/constants'
import { updateActiveCategoryAC, updateCategoriesAC } from '../../store/reducers/actions'
import styles from './Modal.module.scss'

export const Modal = ({ onClick, isVisible }) => {

  const dispatch = useDispatch()

  const categoryList = useSelector(store => store.categoryList.categories)
  const [inputText, setInputText] = useState('')
  const clearArray = new Array(6).fill('')

  // Adding a new category
  const addNewCategory = (title) => {
    const newCategory = {
      id: categoryList.length,
      name: title.trim(),
      data: clearArray,
      translate: clearArray,
      practice: "",
    }
    if (title.trim().length > 0) {
      const updatedCategoryList = [...categoryList, newCategory]
      dispatch(updateCategoriesAC(updatedCategoryList))
      dispatch(updateActiveCategoryAC(categoryList.length))
      setInputText('');
      onClick();
    }
    else {
      onClick();
      return
    }
  }

  const closeModal = () => {
    onClick();
    setInputText('');
  }

  const avoidEmptyClick = (e) => {
    e.stopPropagation()
  }

  const modalStyles = !isVisible ? styles.modal : styles.modal_isVisible;

  return (
    <div
      onClick={closeModal}
      className={modalStyles}>
      <div
        onClick={avoidEmptyClick}
        className={styles.modal_content}>
        <input
          className={styles.modal_input}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={MODAL_INPUT_PLACEHOLDER}
        />
        <div>
          <button
            onClick={closeModal}
            className={styles.modal_btn}>{CLOSE}
          </button>
          <button
            onClick={() => addNewCategory(inputText)}
            className={styles.modal_btn}>{ADD}
          </button>
        </div>
      </div>
    </div>
  )
}