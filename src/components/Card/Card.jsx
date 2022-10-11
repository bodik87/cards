import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_NEW_WORD, ADD_TRANSLATE } from '../../assets/constants'
import { updateActiveValueAC } from '../../store/reducers/actions'
import styles from './Card.module.scss'

export const Card = ({ words, translates, index }) => {

  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const dispatch = useDispatch()

  // Cart side
  // isBackSideShown // rotateCard !!
  const [frontCardSide, setFrontCardSide] = useState(true)
  const changeFrontCardSide = () => {
    //setisEditing(true)
    // if (если есть слово - переворачивается, !isEditing && corner отображается )
    setFrontCardSide(!frontCardSide)

    setEdit(!edit)
    setSave(save)
  }
  // Word
  const [wordValue, setWordValue] = useState(words[index])
  const handleChangeFrontWord = (e) => {
    setWordValue(e.target.value)
  }

  // Translate
  const [translateValue, setTranslateValue] = useState(translates[index])
  const handleChangeTranslateWord = (e) => {
    setTranslateValue(e.target.value)
  }

  const updateSelectedWords = () => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedWordsArray = filteredCategory.data.map((el, i) => i === index ? wordValue : el)
    const updatedFilteredCategory = {
      ...filteredCategory,
      data: updatedWordsArray
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  const updateSelectedTranslates = () => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedTranslatesArray = filteredCategory.translate.map((el, i) => i === index ? translateValue : el)
    const updatedFilteredCategory = {
      ...filteredCategory,
      translate: updatedTranslatesArray
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  const cardCornerIsActive = frontCardSide ?
    styles.cardCorner :
    styles.cardCorner_active;
  const cardIsActive = frontCardSide ?
    styles.card :
    styles.card_active;
  const cardTranslateIsActive = frontCardSide ?
    styles.cardTranslate :
    styles.cardTranslate_active;


  // TESTING EDIT WITH BUTTON
  const wordRef = useRef(null);
  const wtranslateRef = useRef(null);

  const [disabled, setDisabled] = useState(true)
  const [edit, setEdit] = useState(true)
  const [save, setSave] = useState(false)

  const handleEdit = () => {
    setDisabled(!disabled)
    setEdit(!edit)
    setSave(!save)
  };
  const handleSave = () => {
    setDisabled(!disabled)
    setSave(!save)
    updateSelectedWords()
    setEdit(!edit)
  };

  useEffect(() => {
    if (!disabled) {
      wordRef.current.focus();
    }
  }, [disabled]);


  const editStyle = edit ? styles.test1 : styles.test1_disable
  const saveStyle = save ? styles.test2 : styles.test2_disable

  return (
    <div className={styles.cardWrapper}>
      <div
        className={cardCornerIsActive}
        onClick={changeFrontCardSide}>
      </div>


      {/*  

      <card>...</card>

      const Card = ({children}) => {
    isBackSideShown ? 

<div className='input' >
    <input ref>town</input>
  </div>
    : 

  <blaaaa/>
  // продумать, чтоб они не дублировались
  <div className='controls'>
    conditions && edit
    conditions && rotate
  </div>
      }


      <Card cardContent=    isBackSideShown ? 

<div className='input' >
    <input ref>town</input>
  </div>
    : 

  <blaaaa/>>

</Card>

*/}

      <div
        className={editStyle}
        onClick={() => handleEdit(wordRef)}>Edit</div>
      <div
        className={saveStyle}
        onClick={() => handleSave(wordRef)}>Save</div>


      <input
        ref={wordRef}
        disabled={disabled}
        value={wordValue}
        onChange={handleChangeFrontWord}
        className={cardIsActive}
        placeholder={ADD_NEW_WORD}
      // onBlur={updateSelectedWords}
      />
      <input
        ref={wtranslateRef}
        value={translateValue}
        onChange={handleChangeTranslateWord}
        className={cardTranslateIsActive}
        placeholder={ADD_TRANSLATE}
        onBlur={updateSelectedTranslates}
      />
    </div >
  )
}