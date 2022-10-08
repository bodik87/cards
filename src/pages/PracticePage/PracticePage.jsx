import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Content } from '../../components/Content'
import { MINI_CARDS_PLACEHOLDER, PTACTICE_TEXTAREA_PLACEHOLDER } from '../../assets/constants'
import { updateActiveValueAC } from '../../store/reducers/actions';
import styles from './PracticePage.module.scss'

export const PracticePage = () => {
  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const dispatch = useDispatch()

  const [words, setWords] = useState([])
  const [practice, setPractice] = useState('')

  useEffect(() => {
    setWords(categories[activeCategoryIndex]?.data)
  }, [categories, activeCategoryIndex])

  useEffect(() => {
    setPractice(categories[activeCategoryIndex]?.practice)
  }, [categories, activeCategoryIndex])

  const handleChangePracticeText = (e) => {
    setPractice(e.target.value)
  }

  // Почему это мутация??? categories.filter - это ж уже новы массив!
  // const updateSelectedCategoryPractice = () => {
  //   const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
  //   filteredCategory.practice = practice
  //   dispatch(updateActivePracticeAC(filteredCategory))
  // }


  const updateSelectedCategoryPractice = (e) => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedFilteredCategory = {
      ...filteredCategory,
      practice: e.target.value
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  return (
    <Content title={'Practice'}>
      <div className={styles.practice_miniCards}>
        {words.map(el => <input
          key={nanoid()} defaultValue={el}
          disabled="disabled"
          className={styles.practice_miniCard}
          placeholder={MINI_CARDS_PLACEHOLDER} />)}
      </div>
      <textarea
        value={practice}
        onChange={handleChangePracticeText}
        className={styles.textArea}
        placeholder={PTACTICE_TEXTAREA_PLACEHOLDER}
        onBlur={updateSelectedCategoryPractice}
      />
    </Content>
  )
}