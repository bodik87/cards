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
        <div>
          <Logo />
          <div className={styles.panel_categories}>
            <Categories />
          </div>
        </div>

        <div className={styles.panel_right}>
          <ControlButtons />
          <div className={styles.burger}>
            <div onClick={handleClick} className={styles.burger_icon}>
              {!visible ? (
                <BurgerIcon width={25} height={25} />
              ) : (
                <CloseIcon width={25} height={25} />
              )}
            </div>

            <div
              onClick={handleClick}
              className={
                !visible ? styles.burgerMenu : styles.burgerMenu_active
              }
            >
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
