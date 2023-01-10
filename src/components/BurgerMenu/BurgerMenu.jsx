import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ADD_CATEGORY,
  BURGER_VC_MAX_ITEMS_COUNT,
  VC_ITEM_HEIGHT,
} from "../../assets/constants";
import { Button } from "../Button";
import { VerticalCarousel } from "../VerticalCarousel";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  const { categories } = useSelector((state) => state.categoryList);

  return (
    <>
      <BurgerIcon onClick={handleClick} />

      <div className={!visible ? styles.burgerMenu : styles.burgerMenu_active}>
        <VerticalCarousel
          itemsArray={categories}
          itemHeight={VC_ITEM_HEIGHT}
          maxItemsCount={BURGER_VC_MAX_ITEMS_COUNT}
        />
        <div className={styles.header_btns}>
          <Button value={ADD_CATEGORY} onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

const BurgerIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.burgerIcon}>
      <div className={styles.burgerIcon_segment} />
    </div>
  );
};
