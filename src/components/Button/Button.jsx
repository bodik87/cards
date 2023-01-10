import styles from "./Button.module.scss";

export const Button = ({
  isActive,
  onClick,
  value,
  color = "rgba($color: #fff, $alpha: 0.3)",
}) => {
  const buttonStyles = !isActive ? styles.button : styles.button_active;

  return (
    <div
      className={styles.button}
      style={{ background: color }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};
