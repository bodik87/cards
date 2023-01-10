import styles from "./Button.module.scss";

export const Button = ({ onClick, value }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {value}
    </div>
  );
};
