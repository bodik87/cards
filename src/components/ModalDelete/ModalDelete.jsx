import React, { useEffect } from 'react'
import { useState } from 'react'
import { CLOSE, DELETE_CATEGORY, DELETE_CATEGORY_CONFIRMATION } from '../../assets/constants'
import styles from './ModalDelete.module.scss'

/* !!! Add this 2 variables to parents Component:

const [modalVisible, setModalVisible] = useState(false);
const toggleModalVisible = () => setModalVisible(!modalVisible)

*/

export const ModalDelete = ({
  modalTitle = '',
  visible = false,
  toggleModalVisible = null,
  func = null,
  payload = ''
}) => {

  const [inputText, setInputText] = useState('')

  useEffect(() => {
    setInputText(payload)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const mainFunction = () => {
    func()
    toggleModalVisible()
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
        <p className={styles.modal_headerTitle}>{modalTitle}</p>
        <p className={styles.modal_headerDescr}>{DELETE_CATEGORY_CONFIRMATION}</p>

        <div className={styles.modal_btns}>
          <button className={styles.modal_btnClose} onClick={closeModal}>{CLOSE}</button>
          <button onClick={() => mainFunction(inputText)} className={styles.modal_btnOk}>{DELETE_CATEGORY}</button>
        </div>

      </div>
    </div>
  )
}