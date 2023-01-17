import React from "react";
import { Logo } from "../Logo/Logo";
import { Categories } from "../Categoties/Categoties";
import { ControlButtons } from "./ControlButtons/ControlButtons";
import { useState } from "react";
import { BurgerIcon } from "../Icons/BurgerIcon";
import { CloseIcon } from "../Icons/CloseIcon";
import styles from "./ControlPanel.module.scss";

export const ControlPanel = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  return (
    <React.Fragment>
      <div className={styles.panel}>
        <Logo />
        <div className={styles.panel_categories}>
          <Categories />
        </div>
        <ControlButtons />
      </div>
      <div
        onClick={handleClick}
        className={!visible ? styles.burgerMenu : styles.burgerMenu_active}
      >
        <Categories />
      </div>
      <div
        onClick={handleClick}
        className={!visible ? styles.burger : styles.burger_icon}
      >
        {!visible ? (
          <BurgerIcon width={25} height={25} />
        ) : (
          <CloseIcon width={25} height={25} />
        )}
      </div>
    </React.Fragment>
  );
};
