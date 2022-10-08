import React, { useEffect, useState } from 'react'
import { Content } from '../../components/Content'
import { Card } from '../../components/Card'
import { useSelector } from 'react-redux'
import styles from './HomePage.module.scss'
import { nanoid } from '@reduxjs/toolkit'

export const HomePage = () => {
  // Store
  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const [title, setTitle] = useState('')
  const [words, setWords] = useState([])
  const [translates, setTranslates] = useState([])

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
    <Content title={title}>
      <div className={styles.homepage}>
        {words.map((el, i) => <Card
          key={nanoid()}
          words={words}
          translates={translates}
          index={i}
        />)}
      </div>
    </Content>
  )
}