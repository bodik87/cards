import { Logo } from "../Logo/Logo";
import { Categories } from "../Categoties/Categoties";
import styles from "./ControlPanel.module.scss";
import { ControlButtons } from "./ControlButtons/ControlButtons";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { PRACTICE } from "../../assets/constants";
import { path } from "../../path";
import { useState } from "react";

export const ControlPanel = () => {
  const location = useLocation();
  const showPracticeButton = location.pathname !== "/practice";
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  // const dispatch = useDispatch();
  // const { categories } = useSelector((store) => store.categoryList);

  // Modal
  // const [modalVisible, setModalVisible] = useState(false);
  // const toggleModalVisible = () => setModalVisible(!modalVisible);

  // const addNewCategory = (title) => {
  //   const newCategory = createNewCategory(title);
  //   if (title.trim().length > 0) {
  //     const updatedCategoryList = [...categories, newCategory];
  //     dispatch(updateCategoriesAC(updatedCategoryList));
  //     dispatch(updateActiveCategoryAC(newCategory.id));
  //   }
  // };
  // {/* <Modal
  //   modalTitle={ADD_CATEGORY}
  //   visible={modalVisible}
  //   toggleModalVisible={toggleModalVisible}
  //   func={addNewCategory}
  // /> */}
  //  {/* <Button onClick={toggleModalVisible} value={ADD_CATEGORY} /> */}
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
            <Button value={"="} type="small" onClick={handleClick} />
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
        <Button type="small" value={showPracticeButton ? PRACTICE : "Home"} />
      </Link>
    </>
  );
};
