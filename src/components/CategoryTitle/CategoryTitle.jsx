import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import styles from './CategoryTitle.module.scss'

export const CategoryTitle = () => {
  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(categories[activeCategoryIndex]?.name)
  }, [categories, activeCategoryIndex])

  return (
    <div className={styles.categoryTitle}>{title}</div>
  )
}