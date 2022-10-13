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
import { useDebounce } from '../../hooks/useDebounce'

export const PracticePage = () => {

  const { categories, activeCategoryId } = useSelector(state => state.categoryList);
  const activeCategory = categories.filter(category => category.id === activeCategoryId)[0]

  const dispatch = useDispatch()
  const [practice, setPractice] = useState('')

  useEffect(() => {
    setPractice(activeCategory.practice)
  }, [categories, activeCategoryId])

  const updateSelectedCategoryPractice = (e) => {
    const updatedCategory = {
      ...activeCategory,
      practice: e.target.value
    }
    dispatch(updateActiveValueAC(updatedCategory))
  }

  const debouncedInput = useDebounce(updateSelectedCategoryPractice, 500)

  const handleChangePracticeText = (e) => {
    setPractice(e.target.value)
    debouncedInput(e)
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
            {activeCategory.wordsData.map(el => <input
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
          />
        </Content>
      </div>
    </div>
  )
}