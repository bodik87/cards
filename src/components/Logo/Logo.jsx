import { LOGO_TITLE } from "../../assets/constants";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return <div className={styles.logo}>{LOGO_TITLE}</div>;
};
