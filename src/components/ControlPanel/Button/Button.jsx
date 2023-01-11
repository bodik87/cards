import styles from "./Button.module.scss";

export const Button = ({ isActive, onClick, value, type = "big" }) => {
  const buttonStyles = !isActive ? styles.button : styles.button_active;

  const buttonStyle =
    type === "small" && !isActive ? styles.button_small : styles.button_active;

  return (
    <div className={buttonStyle} onClick={onClick}>
      {value}
    </div>
  );
};
