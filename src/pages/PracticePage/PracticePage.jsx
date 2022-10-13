import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Content } from '../../components/Content'
import { MINI_CARDS_PLACEHOLDER, PRACTICE_TEXTAREA_PLACEHOLDER } from '../../assets/constants'
import { updateActiveValueAC } from '../../store/reducers/actions';
import styles from './PracticePage.module.scss'
import { Header } from '../../components/Header';
import { Categories } from '../../components/Categories';
import { CategoryTitle } from '../../components/CategoryTitle';

export const PracticePage = () => {
  const { categories, activeCategoryId } = useSelector(state => state.categoryList);
  const dispatch = useDispatch()

  const [words, setWords] = useState([])
  const [practice, setPractice] = useState('')

  useEffect(() => {
    setWords(categories[activeCategoryId]?.data)
  }, [categories, activeCategoryId])

  useEffect(() => {
    setPractice(categories[activeCategoryId]?.practice)
  }, [categories, activeCategoryId])

  const handleChangePracticeText = (e) => {
    setPractice(e.target.value)
  }

  // Почему это мутация??? categories.filter - это ж уже новы массив!
  // const updateSelectedCategoryPractice = () => {
  //   const filteredCategory = categories.filter(el => el.id === activeCategoryId)[0]
  //   filteredCategory.practice = practice
  //   dispatch(updateActivePracticeAC(filteredCategory))
  // }


  const updateSelectedCategoryPractice = (e) => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryId)[0]
    const updatedFilteredCategory = {
      ...filteredCategory,
      practice: e.target.value
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  return (
    <div className={styles.practice}>
      <Header />
      <div className={styles.practice_wrapper}>
        <Categories />
        <Content>
          <div className={styles.practice_categoryTitle}>
            <CategoryTitle />
          </div>
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
            placeholder={PRACTICE_TEXTAREA_PLACEHOLDER}
            onBlur={updateSelectedCategoryPractice}
          />
        </Content>
      </div>
    </div>
  )
}