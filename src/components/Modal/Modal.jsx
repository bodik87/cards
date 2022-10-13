import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { ADD, CLOSE, MODAL_INPUT_PLACEHOLDER } from '../../assets/constants'
import styles from './Modal.module.scss'

/* !!! Add this 2 variables to parents Component:

const [modalVisible, setModalVisible] = useState(false);
const toggleModalVisible = () => setModalVisible(!modalVisible)

*/

export const Modal = ({
  modalTitle = '',
  visible = false,
  toggleModalVisible = null,
  func = null,
  payload = ''
}) => {

  const inputRef = useRef();
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    inputRef.current.focus()
    setInputText(payload)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const mainFunction = (text) => {
    if (text.trim().length > 0) {
      func(text.trim())
      toggleModalVisible()
    }
    else toggleModalVisible()
  }

  const closeModal = () => {
    toggleModalVisible()
    setInputText('');
  }

  const avoidEmptyClick = (e) => {
    e.stopPropagation()
  }

  const modalStyles = !visible ? styles.modal : styles.modal_isVisible;


  return (
    <div className={modalStyles} onClick={closeModal}>
      <div className={styles.modal_content} onClick={avoidEmptyClick}>

        <div className={styles.modal_header}>
          <label className={styles.modal_headerTitle}>{modalTitle}</label>
          <button className={styles.modal_btnClose} onClick={closeModal}>{CLOSE}</button>
        </div>

        <input
          ref={inputRef}
          className={styles.modal_input}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={MODAL_INPUT_PLACEHOLDER}
        />

        <button
          onClick={() => mainFunction(inputText)}
          className={styles.modal_btnOk}>{ADD}
        </button>

      </div>
    </div>
  )
}