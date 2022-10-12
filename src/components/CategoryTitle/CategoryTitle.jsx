import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt } from 'react-icons/bi'
import styles from './CategoryTitle.module.scss'
import { CATEGORY_ITEM_PLACEHOLDER } from "../../assets/constants";
import { updateActiveValueAC } from "../../store/reducers/actions";

export const CategoryTitle = () => {
  const dispatch = useDispatch();

  const { categories, activeCategoryIndex } = useSelector(state => state.categoryList);
  const [title, setTitle] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setTitle(categories[activeCategoryIndex]?.name)
  }, [categories, activeCategoryIndex])

  const handleChangeCategoryName = (e) => {
    setTitle(e.target.value);
  }

  const titleRef = useRef()
  const handleSetDisabled = () => {
    setDisabled(!disabled);
    titleRef.current.focus()
  }


  const updateSelectedCategory = () => {
    const filteredCategory = categories.filter(el => el.id === activeCategoryIndex)[0]
    const updatedFilteredCategory = {
      ...filteredCategory,
      name: title,
    }
    dispatch(updateActiveValueAC(updatedFilteredCategory))
  }

  return (
    <div className={styles.categoryTitle}>
      <input
        readOnly={disabled}
        ref={titleRef}
        className={styles.categoryTitle_input}
        value={title}
        onChange={handleChangeCategoryName}
        onBlur={updateSelectedCategory}
        placeholder={CATEGORY_ITEM_PLACEHOLDER}
      />
      <BiEditAlt size={30} color={'black'} onClick={handleSetDisabled} />
    </div>
  )
}