import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { VerticalCarousel } from '../VerticalCarousel'
import { Modal } from "../Modal";
import { Logo } from '../../components/SVG'
import { Button } from '../Button'
import { path } from '../../path'
import { ADD_CATEGORY, VC_ITEM_HEIGHT, VC_MAX_ITEMS_COUNT } from '../../assets/constants'
import styles from './Categories.module.scss'

export const Categories = () => {
  // Location
  const location = useLocation()
  const showPracticeButton = location.pathname !== '/practice'

  // Modal
  const [modalView, setModalView] = useState(false);
  const toggleModalView = () => setModalView(!modalView)

  // Categories
  const { categories } = useSelector(store => store.categoryList);

  return (
    <>
      <Modal onClick={toggleModalView} isVisible={modalView} />
      <div className={styles.categories}>
        <Link to={path.home}>
          <Logo className={styles.categories_logo} />
        </Link>
        <VerticalCarousel
          itemsArray={categories}
          itemHeight={VC_ITEM_HEIGHT}
          maxItemsCount={VC_MAX_ITEMS_COUNT}
        />
        <Button value={ADD_CATEGORY} onClick={toggleModalView} />
        <Link to={path.practice}>
          {showPracticeButton && <Button value={'Practice'} />}
        </Link>
      </div>
    </>
  )
}