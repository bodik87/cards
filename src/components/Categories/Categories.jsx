import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { VerticalCarousel } from '../VerticalCarousel'
import { Modal } from "../Modal";
import { Button } from '../Button'
import { ADD_CATEGORY, VC_ITEM_HEIGHT, VC_MAX_ITEMS_COUNT } from '../../assets/constants'
import styles from './Categories.module.scss'

export const Categories = () => {

  // Modal
  const [modalView, setModalView] = useState(false);
  const toggleModalView = () => setModalView(!modalView)

  // Categories
  const { categories } = useSelector(store => store.categoryList);

  return (
    <>
      <Modal onClick={toggleModalView} isVisible={modalView} />
      <div className={styles.categories}>
        <VerticalCarousel
          itemsArray={categories}
          itemHeight={VC_ITEM_HEIGHT}
          maxItemsCount={VC_MAX_ITEMS_COUNT}
        />
        <Button value={ADD_CATEGORY} onClick={toggleModalView} />
      </div>
    </>
  )
}