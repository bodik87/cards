import React, { useEffect } from "react";
import { useState } from "react";
import {
  CLOSE,
  DELETE_CATEGORY,
  DELETE_CATEGORY_CONFIRMATION,
} from "../../../assets/constants";
import styles from "./ModalDelete.module.scss";

export const ModalDelete = ({
  modalTitle = "",
  visible = false,
  toggleModalVisible = null,
  func = null,
}) => {
  const mainFunction = () => {
    func();
    toggleModalVisible();
  };

  const closeModal = () => {
    toggleModalVisible();
  };

  const avoidEmptyClick = (e) => {
    e.stopPropagation();
  };

  const modalStyles = !visible ? styles.modal : styles.modal_isVisible;

  return (
    <div className={modalStyles} onClick={closeModal}>
      <div className={styles.modal_content} onClick={avoidEmptyClick}>
        <p className={styles.modal_headerTitle}>{modalTitle}</p>
        <p className={styles.modal_headerDescr}>
          {DELETE_CATEGORY_CONFIRMATION}
        </p>

        <div className={styles.modal_btns}>
          <button className={styles.modal_btnClose} onClick={closeModal}>
            {CLOSE}
          </button>
          <button onClick={mainFunction} className={styles.modal_btnOk}>
            {DELETE_CATEGORY}
          </button>
        </div>
      </div>
    </div>
  );
};
