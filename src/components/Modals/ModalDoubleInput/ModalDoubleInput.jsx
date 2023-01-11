import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  ADD,
  CLOSE,
  MODAL_INPUT_PLACEHOLDER,
  MODAL_INPUT_PLACEHOLDER_TRNSLT,
} from "../../../assets/constants";
import { ModalContainer } from "../ModalContainer/ModalContainer";
import styles from "./ModalDoubleInput.module.scss";

export const ModalDoubleInput = ({
  modalTitle,
  visible,
  toggleModalVisible,
  func,
  payload1 = "",
  payload2 = "",
}) => {
  const inputRef = useRef();
  const [inputText1, setInputText1] = useState(payload1);
  const [inputText2, setInputText2] = useState(payload2);

  useEffect(() => {
    inputRef.current.focus();
    setInputText1(payload1);
    setInputText2(payload2);
  }, [visible]);

  const mainFunction = (text1, text2) => {
    func(text1.trim(), text2.trim());
    toggleModalVisible();
  };

  const closeModal = () => {
    toggleModalVisible();
    setInputText1("");
    setInputText2("");
  };

  return (
    <ModalContainer
      visible={visible}
      modalTitle={modalTitle}
      enableButton={ADD}
      disableButton={CLOSE}
      onDisableClick={closeModal}
      onEnableClick={() => mainFunction(inputText1, inputText2)}
    >
      <input
        ref={inputRef}
        className={styles.input}
        value={inputText1}
        onChange={(e) => setInputText1(e.target.value)}
        placeholder={MODAL_INPUT_PLACEHOLDER}
      />
      <input
        className={styles.input}
        value={inputText2}
        onChange={(e) => setInputText2(e.target.value)}
        placeholder={MODAL_INPUT_PLACEHOLDER_TRNSLT}
      />
    </ModalContainer>
  );
};
