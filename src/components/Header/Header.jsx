import { BurgerMenu } from "../BurgerMenu";
import { CategoryTitle } from "../CategoryTitle";
import { Logo } from "../Logo/Logo";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>{/* <Logo /> */}</div>
      <CategoryTitle />
      <BurgerMenu />
    </header>
  );
};
