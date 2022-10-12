import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_NEW_WORD, ADD_TRANSLATE, CLOSE, EDIT_CARD_VALUES, SAVE } from '../../assets/constants'
import { updateActiveValueAC } from '../../store/reducers/actions'
import { MdOutlineFlipCameraAndroid } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import styles from './Card.module.scss'
import { ModalDoubleInput } from '../ModalDoubleInput/ModalDoubleInput'

export const Card = ({ words, translates, index }) => {

  // Store
  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const dispatch = useDispatch()

  // Cart side
  const [frontCardSide, setFrontCardSide] = useState(true)
  const toggleCardSide = () => setFrontCardSide(!frontCardSide)

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible)

  const updateCardValues = (text1, text2) => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedWordsArray = filteredCategory.data.map((el, i) => i === index ? text1 : el)
    const updatedTranslatesArray = filteredCategory.translate.map((el, i) => i === index ? text2 : el)
    const updatedFilteredCategory = {
      ...filteredCategory,
      data: updatedWordsArray,
      translate: updatedTranslatesArray
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  const frontCardStyle = frontCardSide ? styles.card : styles.card_active;
  const backCardStyle = frontCardSide ? styles.cardTranslate : styles.cardTranslate_active;

  return (
    <>
      <ModalDoubleInput
        modalTitle={EDIT_CARD_VALUES}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={updateCardValues}
        payload1={words[index]}
        payload2={translates[index]}
      />

      <div className={styles.cardWrapper}>
        <div className={frontCardStyle}>
          <input
            disabled
            readOnly
            value={words[index]}
            className={styles.card_wordValue}
            placeholder={ADD_NEW_WORD}
          />
          <div className={styles.card_btnsWrapper}>
            <MdOutlineFlipCameraAndroid onClick={toggleCardSide} color={'#738899'} />
            <BiEditAlt onClick={toggleModalVisible} color={'#738899'} />
          </div>
        </div>
        <div className={backCardStyle}>
          <input
            disabled
            readOnly
            value={translates[index]}
            className={styles.card_translateValue}
            placeholder={ADD_TRANSLATE}
          />
          <div className={styles.card_btnsWrapper}>
            <MdOutlineFlipCameraAndroid onClick={toggleCardSide} color={'#e49a34'} />
            <BiEditAlt onClick={toggleModalVisible} color={'#e49a34'} />
          </div>
        </div>

      </div>
    </>
  )
}