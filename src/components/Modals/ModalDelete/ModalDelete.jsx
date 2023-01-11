import React from "react";
import {
  CLOSE,
  DELETE_CATEGORY,
  DELETE_CATEGORY_CONFIRMATION,
} from "../../../assets/constants";
import { ModalContainer } from "../ModalContainer/ModalContainer";
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

  return (
    <ModalContainer
      visible={visible}
      modalTitle={modalTitle}
      enableButton={DELETE_CATEGORY}
      disableButton={CLOSE}
      onDisableClick={closeModal}
      onEnableClick={mainFunction}
    >
      <p className={styles.warning}>{DELETE_CATEGORY_CONFIRMATION}</p>
    </ModalContainer>
  );
};
