import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/SVG'
import { path } from '../../path'
import styles from './TestingPage.module.scss'

export const TestingPage = () => {

  return (
    <h1 className={styles.testingPage}>
      <Link to={path.home}><Logo className={styles.categories_logo} /></Link>
      Testing
    </h1>
  )
}