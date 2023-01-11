import styles from "./ModalContainer.module.scss";

export const ModalContainer = ({
  visible = false,
  modalTitle = "",
  enableButton,
  disableButton,
  children,
  onDisableClick,
  onEnableClick,
}) => {
  const avoidEmptyClick = (e) => {
    e.stopPropagation();
  };

  const modalStyles = !visible ? styles.modal : styles.modal_isVisible;

  return (
    <div className={modalStyles} onClick={onDisableClick}>
      <div className={styles.modal_content} onClick={avoidEmptyClick}>
        <div className={styles.modal_header}>
          <label className={styles.modal_headerTitle}>{modalTitle}</label>
          <button className={styles.modal_btnClose} onClick={onDisableClick}>
            {disableButton}
          </button>
        </div>
        {children}
        <button onClick={onEnableClick} className={styles.modal_btnOk}>
          {enableButton}
        </button>
      </div>
    </div>
  );
};
