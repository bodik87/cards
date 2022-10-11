import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/SVG'
import { path } from '../../path'
import styles from './Notfoundpage.module.scss'

export const Notfoundpage = () => {

  return (
    <h1 className={styles.notfoundpage}>
      <Link to={path.home}><Logo className={styles.categories_logo} /></Link>
      Page not found
    </h1>
  )
}