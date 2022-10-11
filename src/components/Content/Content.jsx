import React from 'react'
import styles from './Content.module.scss'

export const Content = ({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}