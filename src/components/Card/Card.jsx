import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_NEW_WORD, ADD_TRANSLATE, CLOSE, SAVE } from '../../assets/constants'
import { updateActiveValueAC } from '../../store/reducers/actions'
import { MdOutlineFlipCameraAndroid } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import styles from './Card.module.scss'

export const Card = ({ words, translates, index }) => {

  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const dispatch = useDispatch()

  // Cart side
  const [frontCardSide, setFrontCardSide] = useState(true)
  const changeFrontCardSide = () => {
    setFrontCardSide(!frontCardSide)
  }

  // Word
  const [wordValue, setWordValue] = useState(words[index])
  const handleChangeWord = (e) => {
    setWordValue(e.target.value)
  }

  // Translate
  const [translateValue, setTranslateValue] = useState(translates[index])
  const handleChangeTranslate = (e) => {
    setTranslateValue(e.target.value)
  }

  // CardModal
  // Modal
  const [modalView, setModalView] = useState(false);
  const toggleModalView = () => setModalView(!modalView)

  const updateSelectedWords = () => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedWordsArray = filteredCategory.data.map((el, i) => i === index ? wordValue : el)
    const updatedTranslatesArray = filteredCategory.translate.map((el, i) => i === index ? translateValue : el)
    const updatedFilteredCategory = {
      ...filteredCategory,
      data: updatedWordsArray,
      translate: updatedTranslatesArray
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  const cardIsActive = frontCardSide ?
    styles.card :
    styles.card_active;
  const cardTranslateIsActive = frontCardSide ?
    styles.cardTranslate :
    styles.cardTranslate_active;

  const modalStyles = modalView ? styles.cardModal : styles.cardModal_unactive;

  const wordInputProps = {
    value: wordValue,
    onChange: handleChangeWord,
    placeholder: ADD_NEW_WORD
  }
  const translateInputProps = {
    value: translateValue,
    onChange: handleChangeTranslate,
    placeholder: ADD_TRANSLATE
  }

  return (
    <>
      <div className={modalStyles}>
        <div className={styles.cardModal_content}>
          <div className={styles.cardModal_wordInputWrapper}>
            <label className={styles.cardModal_wordInputLable}>Word</label>
            <input
              className={styles.cardModal_wordInput}
              value={wordValue}
              onChange={wordInputProps.onChange}
            />
          </div>
          <div className={styles.cardModal_wordInputWrapper}>
            <label className={styles.cardModal_wordInputLable}>Translate</label>
            <input
              className={styles.cardModal_translateInput}
              value={translateValue}
              onChange={translateInputProps.onChange}

            />
          </div>
          <div className={styles.cardModal_btnRow}>
            <button
              className={styles.cardModal_btnEdit}
              onClick={toggleModalView}
            >{CLOSE}</button>
            <button
              className={styles.cardModal_btnSave}
              onClick={updateSelectedWords}
            >{SAVE}</button>
          </div>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <div className={cardIsActive}>
          <input
            disabled
            readOnly
            value={wordValue}
            className={styles.card_wordValue}
            placeholder={ADD_NEW_WORD}
          />
          <div className={styles.card_btnsWrapper}>
            <MdOutlineFlipCameraAndroid onClick={changeFrontCardSide} color={'#738899'} />
            <BiEditAlt onClick={toggleModalView} color={'#738899'} />
          </div>
        </div>
        <div className={cardTranslateIsActive}>
          <input
            disabled
            readOnly
            value={translateValue}
            className={styles.card_wordValue}
            placeholder={ADD_TRANSLATE}
          />
          <div className={styles.card_btnsWrapper}>
            <MdOutlineFlipCameraAndroid onClick={changeFrontCardSide} color={'#e49a34'} />
            <BiEditAlt onClick={toggleModalView} color={'#e49a34'} />
          </div>
        </div>

      </div>
    </>
  )
}