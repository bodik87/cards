import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { ADD, CLOSE, MODAL_INPUT_PLACEHOLDER } from '../../assets/constants'
import styles from './ModalDoubleInput.module.scss'

export const ModalDoubleInput = ({
  modalTitle,
  visible,
  toggleModalVisible,
  func,
  payload1 = '',
  payload2 = ''
}) => {

  const inputRef = useRef();
  const [inputText1, setInputText1] = useState('')
  const [inputText2, setInputText2] = useState('')

  useEffect(() => {
    inputRef.current.focus()
    setInputText1(payload1)
    setInputText2(payload2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const mainFunction = (text1, text2) => {
    func(text1.trim(), text2.trim())
    toggleModalVisible()
  }

  const closeModal = () => {
    toggleModalVisible()
    setInputText1('');
    setInputText2('');
  }

  const avoidEmptyClick = e => e.stopPropagation()

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
          value={inputText1}
          onChange={(e) => setInputText1(e.target.value)}
          placeholder={MODAL_INPUT_PLACEHOLDER}
        />

        <input
          className={styles.modal_input}
          value={inputText2}
          onChange={(e) => setInputText2(e.target.value)}
          placeholder={MODAL_INPUT_PLACEHOLDER}
        />

        <button
          onClick={() => mainFunction(inputText1, inputText2)}
          className={styles.modal_btnOk}>{ADD}
        </button>

      </div>
    </div>
  )
}