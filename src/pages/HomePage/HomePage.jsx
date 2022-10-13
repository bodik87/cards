import React from 'react'
import { Content } from '../../components/Content'
import { Card } from '../../components/Card'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import styles from './HomePage.module.scss'
import { CategoryTitle } from '../../components/CategoryTitle/CategoryTitle'

export const HomePage = () => {

  const { categories, activeCategoryId } = useSelector(state => state.categoryList);
  const activeCategory = categories.filter(category => category.id === activeCategoryId)[0]

  return (
    <div className={styles.homepage}>
      <Header />
      <div className={styles.homepage_wrapper}>
        <Categories />
        <Content>
          <div className={styles.homepage_categoryTitle}>
            <CategoryTitle />
          </div>
          <div className={styles.homepage_cards}>
            {activeCategory.wordsData.map((el, i) => <Card
              key={nanoid()}
              words={activeCategory.wordsData}
              translates={activeCategory.translatesData}
              index={i}
            />)}
          </div>
        </Content>
      </div>
    </div>
  )
}