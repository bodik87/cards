import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { VC_ITEM_HEIGHT, BURGER_VC_MAX_ITEMS_COUNT, ADD_CATEGORY, PRACTICE } from '../../assets/constants'
import { path } from '../../path'
import { Burger } from '../Burger'
import { Button, ButtonType } from '../Button'
import { Modal } from '../Modal'
import { CategoryTitle } from '../CategoryTitle'
import { AnimatedLogo } from '../SVG/AnimatedLogo/AnimatedLogo'
import { VerticalCarousel } from '../VerticalCarousel'

import styles from './Header.module.scss'


export const Header = () => {
  // Store
  const { categories } = useSelector(state => state.categoryList);

  // Location
  const location = useLocation()
  const showPracticeButton = location.pathname !== '/practice'

  const [burgerMenu, setBurgerMenu] = useState(false)
  const toggleBurgerMenu = () => setBurgerMenu(!burgerMenu)
  const burgerMenuStyles = burgerMenu ? styles.header_burgerMenu_active : styles.header_burgerMenu;

  // Modal
  const [modalView, setModalView] = useState(false);
  const toggleModalView = () => setModalView(!modalView)

  return (
    <>
      <Modal onClick={toggleModalView} isVisible={modalView} />
      <div className={styles.header}>
        <Link to={path.home}><AnimatedLogo /></Link>

        <div className={styles.header_rowBtns}>
          <div className={styles.header_categoryTitle}>
            <CategoryTitle />
          </div>
          <Link to={path.practice}>{showPracticeButton && <Button value={PRACTICE} type={ButtonType.ORANGE} />}</Link>
          <Burger onClick={toggleBurgerMenu} />
        </div>
        <div className={burgerMenuStyles}>
          <VerticalCarousel
            itemsArray={categories}
            itemHeight={VC_ITEM_HEIGHT}
            maxItemsCount={BURGER_VC_MAX_ITEMS_COUNT}
          />
          <div className={styles.header_btns}>
            <Button
              value={ADD_CATEGORY}
              onClick={toggleModalView} />
          </div>
        </div>
      </div>
    </>
  )
}