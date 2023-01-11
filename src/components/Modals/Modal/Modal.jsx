import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { ADD, CLOSE, MODAL_INPUT_PLACEHOLDER } from "../../../assets/constants";
import { ModalContainer } from "../ModalContainer/ModalContainer";
import styles from "./Modal.module.scss";

export const Modal = ({
  modalTitle = "",
  visible = false,
  toggleModalVisible = null,
  func = null,
  payload = "",
}) => {
  const inputRef = useRef();
  const [inputText, setInputText] = useState(payload);

  useEffect(() => {
    inputRef.current.focus();
  }, [visible]);

  const mainFunction = (text) => {
    if (text.trim().length > 0) {
      func(text.trim());
      toggleModalVisible();
    } else toggleModalVisible();
  };

  const closeModal = () => {
    toggleModalVisible();
    setInputText("");
  };

  return (
    <ModalContainer
      visible={visible}
      modalTitle={modalTitle}
      enableButton={ADD}
      disableButton={CLOSE}
      onDisableClick={closeModal}
      onEnableClick={() => mainFunction(inputText)}
    >
      <input
        ref={inputRef}
        className={styles.input}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={MODAL_INPUT_PLACEHOLDER}
      />
    </ModalContainer>
  );
};
