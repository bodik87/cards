import React from 'react'
import { Header } from '../Header'
import styles from './Content.module.scss'

export const Content = ({ title, children }) => {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.content_title}>{title}</div>
      {children}
    </div>
  )
}