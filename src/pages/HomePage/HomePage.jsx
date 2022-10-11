import React, { useEffect, useState } from 'react'
import { Content } from '../../components/Content'
import { Card } from '../../components/Card'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Header } from '../../components/Header'
import { Categories } from '../../components/Categories'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  // Store
  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);

  const [words, setWords] = useState([])
  const [translates, setTranslates] = useState([])
  const [title, setTitle] = useState('')

  // Category title
  useEffect(() => {
    setTitle(categories[activeCategoryIndex]?.name)
  }, [categories, activeCategoryIndex])

  // Words array
  useEffect(() => {
    setWords(categories[activeCategoryIndex]?.data)
  }, [categories, activeCategoryIndex])

  // Translates array
  useEffect(() => {
    setTranslates(categories[activeCategoryIndex]?.translate)
  }, [categories, activeCategoryIndex])

  return (
    <div className={styles.homepage}>
      <Header />
      <div className={styles.homepage_wrapper}>
        <Categories />
        <Content>
          <div className={styles.homepage_title}>{title}</div>
          <div className={styles.homepage_cards}>
            {words.map((el, i) => <Card
              key={nanoid()}
              words={words}
              translates={translates}
              index={i}
            />)}
          </div>
        </Content>
      </div>
    </div>
  )
}