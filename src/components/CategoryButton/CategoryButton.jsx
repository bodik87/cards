import styles from "./CategoryButton.module.scss";

export const CategoryButton = ({ isActive, onClick, value }) => {
  const buttonStyles = !isActive ? styles.button : styles.button_active;

  return (
    <div className={buttonStyles} onClick={onClick}>
      {value}
    </div>
  );
};
