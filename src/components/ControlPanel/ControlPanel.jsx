import { Logo } from "../Logo/Logo";
import { Categories } from "../Categoties/Categoties";
import styles from "./ControlPanel.module.scss";
import { ControlButtons } from "./ControlButtons/ControlButtons";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { PRACTICE } from "../../assets/constants";
import { path } from "../../path";
import { useState } from "react";
import { BurgerIcon } from "../Icons/BurgerIcon";

export const ControlPanel = () => {
  const location = useLocation();
  const showPracticeButton = location.pathname !== "/practice";
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  return (
    <>
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
            <div onClick={handleClick}>
              <BurgerIcon width={25} height={25} />
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

      <Link
        className={styles.panel_practice}
        to={showPracticeButton ? path.practice : path.home}
      >
        <Button value={showPracticeButton ? PRACTICE : "Home"} />
      </Link>
    </>
  );
};
