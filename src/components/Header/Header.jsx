import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { VC_ITEM_HEIGHT, BURGER_VC_MAX_ITEMS_COUNT, ADD_CATEGORY } from '../../assets/constants'
import { Logo } from '../../components/SVG'
import { path } from '../../path'
import { Burger } from '../Burger'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { VerticalCarousel } from '../VerticalCarousel'

import styles from './Header.module.scss'


export const Header = () => {

  // Location
  const location = useLocation()
  const showPracticeButton = location.pathname !== '/practice'

  const [burgerMenu, setBurgerMenu] = useState(false)
  const toggleBurgerMenu = () => setBurgerMenu(!burgerMenu)
  const burgerMenuStyles = burgerMenu ? styles.header_burgerMenu_active : styles.header_burgerMenu;

  // Modal
  const [modalView, setModalView] = useState(false);
  const toggleModalView = () => setModalView(!modalView)

  // Categories
  const { categories } = useSelector(store => store.categoryList);


  return (
    <>
      <Modal onClick={toggleModalView} isVisible={modalView} />
      <div className={styles.header}>
        <Link to={path.home}><Logo className={styles.categories_logo} /></Link>
        <Burger onClick={toggleBurgerMenu} />
        <div className={burgerMenuStyles}>
          <VerticalCarousel
            itemsArray={categories}
            itemHeight={VC_ITEM_HEIGHT}
            maxItemsCount={BURGER_VC_MAX_ITEMS_COUNT}
          />
          <div className={styles.header_btns}>
            <Button value={ADD_CATEGORY} onClick={toggleModalView} />
            <Link to={path.practice}>{showPracticeButton && <Button value={'Practice'} />}</Link>
          </div>
        </div>
      </div>
    </>
  )
}