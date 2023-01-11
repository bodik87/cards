import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_NEW_WORD,
  ADD_TRANSLATE,
  EDIT_CARD_VALUES,
} from "../../assets/constants";
import { updateActiveValueAC } from "../../store/reducers/actions";
import { EditIcon } from "../Icons/EditIcon";
import { ModalDoubleInput } from "../Modals/ModalDoubleInput/ModalDoubleInput";
import styles from "./Card.module.scss";

export const Card = ({ words, translates, index }) => {
  // Store
  const dispatch = useDispatch();
  const { categories, activeCategoryId } = useSelector(
    (state) => state.categoryList
  );
  const activeCategory = categories.filter(
    (category) => category.id === activeCategoryId
  )[0];

  // Cart side
  const [frontCardSide, setFrontCardSide] = useState(true);
  const toggleCardSide = () => setFrontCardSide(!frontCardSide);

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => setModalVisible(!modalVisible);

  const updateCardValues = (text1, text2) => {
    const updatedWordsArray = words.map((el, i) => (i === index ? text1 : el));
    const updatedTranslatesArray = translates.map((el, i) =>
      i === index ? text2 : el
    );
    const updatedFilteredCategory = {
      ...activeCategory,
      wordsData: updatedWordsArray,
      translatesData: updatedTranslatesArray,
    };
    dispatch(updateActiveValueAC(updatedFilteredCategory));
  };

  const frontCardStyle = frontCardSide ? styles.card : styles.card_active;
  const backCardStyle = frontCardSide
    ? styles.cardTranslate
    : styles.cardTranslate_active;

  return (
    <React.Fragment>
      <ModalDoubleInput
        modalTitle={EDIT_CARD_VALUES}
        visible={modalVisible}
        toggleModalVisible={toggleModalVisible}
        func={updateCardValues}
        payload1={words[index]}
        payload2={translates[index]}
      />

      <div className={styles.cardWrapper}>
        <div className={frontCardStyle}>
          <input
            disabled
            readOnly
            value={words[index]}
            className={styles.card_wordValue}
            placeholder={ADD_NEW_WORD}
          />
          <div className={styles.card_btnsWrapper}>
            <div onClick={toggleCardSide}>
              <EditIcon width={20} height={20} className={styles.btns_back} />
            </div>

            <div onClick={toggleModalVisible}>
              <EditIcon width={20} height={20} className={styles.btns_back} />
            </div>
          </div>
        </div>
        <div className={backCardStyle}>
          <input
            disabled
            readOnly
            value={translates[index]}
            className={styles.card_translateValue}
            placeholder={ADD_TRANSLATE}
          />
          <div className={styles.card_btnsWrapper}>
            <div onClick={toggleCardSide}>
              <EditIcon width={20} height={20} className={styles.btns_back} />
            </div>
            <div onClick={toggleModalVisible}>
              <EditIcon width={20} height={20} className={styles.btns_back} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
