import React, { useState } from 'react'
import { ADD_CATEGORY, GREETING_HELLO, GREETING_INSTRUCTION, GREETING_NAME, GREETING_NAME_DESCR } from '../../assets/constants'
import { Button } from '../Button'
import { Modal } from '../Modal/Modal'
import { Logo } from '../SVG'
import styles from './EmptyCategories.module.scss'

export const EmptyCategories = () => {
  // Modal
  const [modalView, setModalView] = useState(false);
  const toggleModalView = () => setModalView(!modalView)
  return (
    <div className={styles.emptyCategories}>
      <Modal onClick={toggleModalView} isVisible={modalView} />
      <Logo />
      <h1>{GREETING_HELLO}</h1>
      <h2>{GREETING_NAME}</h2>
      <h3>{GREETING_NAME_DESCR}</h3>
      <p className={styles.emptyCategories_instruction}>{GREETING_INSTRUCTION}</p>
      <Button value={ADD_CATEGORY} onClick={toggleModalView} />
    </div>
  )
}